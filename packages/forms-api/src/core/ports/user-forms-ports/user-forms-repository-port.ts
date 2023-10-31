import {IUserForms} from "../../domain/user-forms";

export interface IUserFormsRepositoryPort {
    saveUserForms(form, userId, formCases): Promise<IUserForms>;
    findUserForms(userId): Promise<IUserForms>;
    addUseCase(formCase, formId, email): Promise<IUserForms>;
}
