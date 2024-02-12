import { IUserForms } from "../../domain/user-forms";

export interface IUserFormsApiPort {
    getUserForms(email: string): Promise<IUserForms>;
    saveUserForm(form, user, useCases): Promise<IUserForms>;
    createDefaultUserForms(email: string): Promise<string>;
}
