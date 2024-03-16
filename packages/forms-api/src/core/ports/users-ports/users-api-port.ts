import {IUser} from "../../domain/user";

export interface IUserApiPort {
    getUsers(email: string): Promise<IUser[]>;
    saveUser(user: IUser): Promise<IUser>;
    getUserByEmail(email: string): Promise<IUser>;
}
