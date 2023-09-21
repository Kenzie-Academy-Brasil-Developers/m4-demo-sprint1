export interface IUser{
    id: string;
    name: string;
    email: string;
}

export interface IField{
    key: string;
    required?: boolean;
    min?: number;
    max?: number;
    regex?: {
        expression: RegExp,
        message: string;
    }
}