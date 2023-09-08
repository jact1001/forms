import {IUserForms} from "../../domain/user-forms";

export interface IUserFormsRepositoryPort {
    findUserForms(userId): Promise<IUserForms>;
    saveUserForms(user): Promise<IUserForms>;
}
