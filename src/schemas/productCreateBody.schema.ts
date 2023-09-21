import { IField } from "../interfaces";

export const productCreateBodySchema: IField[] = [
    {
        key: "name",
        required: true,
        min: 2,
        max: 25,    
    },
    {
        key: "email",
        required: true,
        regex: {
            expression: /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "is not a valid email"
        }
    }
]