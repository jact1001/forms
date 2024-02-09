import {IUserForms} from "../../domain/user-forms";

export interface IUserFormsRepositoryPort {
    saveUserForm(form, userId, formCases): Promise<IUserForms>;
    findUserForms(userId): Promise<IUserForms>;
    addUseCase(formCase, formId, email): Promise<IUserForms>;
}
