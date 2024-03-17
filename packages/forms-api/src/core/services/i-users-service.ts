import {IUser} from "../domain/user";
export interface IUsersService {
    getUsers(email): Promise<IUser[]>;
    saveUser(form): Promise<IUser>;
    getUserByEmail(email): Promise<IUser>;
}
