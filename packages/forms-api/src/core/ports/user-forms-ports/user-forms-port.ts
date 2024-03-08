import {IUserForms} from "../../domain/user-forms";
import {IUseCase} from "../../domain/use-case";

export interface IUserFormsApiPort {
    getUserForms(email: string): Promise<IUserForms>;

    createCase(useCase, formId, email: any): Promise<IUserForms>;

    exportUseCasesByFormId(formId: string, email: any): Promise<IUseCase[]>;
}
