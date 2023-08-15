import { IUser } from "../../domain/user";

export interface IUserRepositoryPort {
    findUsers(): Promise<IUser[]>;
    saveUser(user): Promise<IUser>;
}
