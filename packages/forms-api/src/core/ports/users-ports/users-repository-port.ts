import { IUser } from "../../domain/user";

export interface IUserRepositoryPort {
    findUsers(email): Promise<IUser[]>;
    saveUser(user): Promise<IUser>;
}
