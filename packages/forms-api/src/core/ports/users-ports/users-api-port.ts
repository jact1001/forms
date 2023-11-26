import {IUser} from "../../domain/user";

export interface IUserApiPort {
    getUsers(email): Promise<IUser[]>;
    saveUser(form): Promise<IUser>;
}
