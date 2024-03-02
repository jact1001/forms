import {IUseCase} from "../domain/use-case";
import {IForm} from "../domain/form";
export interface IUseCaseService {
    saveUseCase(useCase): Promise<IUseCase>;
    getUseCasesByFormId (formId): Promise<IUseCase[]>;
    updateFormUseCases(form: IForm, email: string): Promise<any>;
    updateUseCase(useCase: IUseCase, email: string): Promise<any>;
    getUseCasesByUseCaseId(caseId: string, email: string): Promise<any>;
}
