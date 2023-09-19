import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import { userDatabase } from "./database";

export const getOneUser = (req: Request, res: Response) => {
    // req.body, req.headers, req.params, req.query

    const user = userDatabase.find(user => user.id === req.params.userId);

    return res.status(200).json(user);
}

export const getUsers = (req: Request, res: Response) => {
    return res.status(200).json(userDatabase);
}

export const createUser = (req: Request, res: Response) => {
    //req.body: name, email
    //Modelando um usuário
    const newUser = { id: uuidv4(), name: req.body.name, email: req.body.email  };
    //Adicionando esse usuário no "banco de dados"
    userDatabase.push(newUser);

    return res.status(201).json({ message: "User sucessfully created", user: newUser });
}

export const deleteUser = (req: Request, res: Response) => {
    // req.body, req.headers, req.params, req.query
    const index = userDatabase.findIndex(user => user.id === req.params.userId);

    //Exclusão com splice (removendo um item de um index específico)
    userDatabase.splice(index, 1);

    return res.status(200).json({ message: "User sucessfully deleted"});
}

export const updateUser = (req: Request, res: Response) => {
    const index = userDatabase.findIndex(user => user.id === req.params.userId);

    const newUser = { id: req.params.userId, name: req.body.name, email: req.body.email };

    //Substituição com splice (substituindo um item específico)
    userDatabase.splice(index, 1, newUser);

    return res.status(200).json({ message: "User updated sucessfully", user: newUser });
}