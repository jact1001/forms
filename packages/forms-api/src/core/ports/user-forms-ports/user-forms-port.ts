import { IUserForms } from "../../domain/user-forms";

export interface IUserFormsApiPort {
    getUserForms(email: string): Promise<IUserForms>;
    saveUserForms(form, user): Promise<IUserForms>;
}
