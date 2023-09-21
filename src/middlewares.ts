import { NextFunction, Request, Response } from "express";
import { userDatabase } from "./database";
import { IField } from "./interfaces";

export const isUserIdValid = (req: Request, res: Response, next: NextFunction) => {    
    if(!userDatabase.some(user => user.id === req.params.userId)){
        return res.status(404).json({ error: "Not found any user with this id"});
    }

    return next();
}

export const isUserEmailUnique = (req: Request, res: Response, next: NextFunction) => {
    if(userDatabase.some(user => user.email === req.body.email)){
        return res.status(401).json({ error: "You cannot register a user with the same email."})
    }

    return next();
}

export const isRequestBodyValid = (req: Request, res: Response, next: NextFunction) => {
    if(!req.body.name || !req.body.email){
        return res.status(422).json({ error: "Missing body parameters"});
    }

    return next();
}

export const bodyValidator = (fieldList: IField[]) => (req: Request, res: Response, next: NextFunction) => {
    const errors: string[] = [];

    fieldList.forEach(field => {
        const fieldValue = req.body[field.key];

        if(field.required && !fieldValue){
            errors.push(`${field.key} is required`);
        } else if (field.min && fieldValue.length < field.min) {
            errors.push(`${field.key} should have at least ${field.min} characters.`);
        } else if (field.max && fieldValue.length > field.max) {
            errors.push(`${field.key} shouldn't have more than ${field.max} characters.`)
        } else if (field.regex && !fieldValue.match(field.regex.expression)) {
            errors.push(`${field.key}: ${field.regex.message}`);
        }
    });

    if(errors.length > 0){
        return res.status(422).json(errors);
    }

    next();
}