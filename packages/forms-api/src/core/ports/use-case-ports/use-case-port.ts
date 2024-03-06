import {IUseCase} from "../../domain/use-case";

export interface IUseCasePort {
    saveUseCase(useCase): Promise<IUseCase>;

    getUseCasesByFormId(formId): Promise<IUseCase[]>;

    getUseCasesByUseCaseId(caseId: string, email: any): Promise<IUseCase>;

    updateUseCase(data: IUseCase, email: any): Promise<IUseCase>;
}
