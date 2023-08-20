import {IUser} from "../../domain/user";

export interface IUserApiPort {
    getUsers(): Promise<IUser[]>;
    saveUser(form): Promise<IUser>;
}
