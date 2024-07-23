import { Request } from 'express';
import { UserProps } from './users';

interface UserAuthorized {
    id: string;
    name: string | null;
    email: string | null;
}

declare module 'express' {
    interface Request {
        user?: UserAuthorized;
    }
}