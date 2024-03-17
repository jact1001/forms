import {IFormCase, IUserForms} from "../../domain/user-forms";

export interface IUserFormsRepositoryPort {
    saveUserForm(userId, formCases): Promise<IUserForms>;
    findUserForms(userId): Promise<IUserForms>;
    addUseCase(formCase, formId, email): Promise<IUserForms>;
    updateUseCase(formCase: IFormCase, formId: string, email: string): Promise<IUserForms>;
}
