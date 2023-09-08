import { IUserForms } from "../../domain/user-forms";

export interface IUserFormsApiPort {
    getUserForms(): Promise<IUserForms[]>;
    saveUserForms(form): Promise<IUserForms>;
}
