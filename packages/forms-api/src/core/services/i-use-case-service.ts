import {IUseCase} from "../domain/use-case";
import {IForm} from "../domain/form";
export interface IUseCaseService {
    saveUseCase(useCase: IUseCase): Promise<IUseCase>;
    getUseCasesByFormId (formId: string): Promise<IUseCase[]>;
    updateUseCase(useCase: IUseCase, email: string): Promise<IUseCase>;
    createCase(data: IUseCase, email: string): Promise<IUseCase>;
    getUseCaseByUseCaseId(caseId: string, email: string): Promise<IUseCase>;
}
