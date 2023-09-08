export interface IRole {
    _id: string;
    name: string;
}

export interface IUser {
    _id?: string;
    number_id?: string;
    user_name: string;
    last_name: string;
    email: string;
    role?: IRole
}
