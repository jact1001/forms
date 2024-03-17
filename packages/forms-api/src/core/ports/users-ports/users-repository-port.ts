import { IUser } from "../../domain/user";

export interface IUserRepositoryPort {
    findUsers(email: string): Promise<IUser[]>;
    saveUser(user: IUser): Promise<IUser>;
    findUserByEmail(email: string): Promise<IUser>;
}
