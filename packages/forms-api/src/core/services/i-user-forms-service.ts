import {IFormCase, IUserForms} from "../domain/user-forms";
import {IUseCase} from "../domain/use-case";

export interface IUserFormsService {
    getUserForms(email: string): Promise<IUserForms>;

    createDefaultUserForms(email: string): Promise<string>;

    createCase(userForm: IFormCase, formId: string, email: string): Promise<IUserForms>;

    updateFormUseCase(userForm: IFormCase, formId: string, email: string): Promise<IUserForms>;

    exportUseCasesByFormId(formId: string, email: string): Promise<IUseCase[]>;
}
