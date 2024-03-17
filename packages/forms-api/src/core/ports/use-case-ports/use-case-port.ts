import {IUseCase} from "../../domain/use-case";

export interface IUseCasePort {
    saveUseCase(useCase): Promise<IUseCase>;

    getUseCasesByFormId(formId): Promise<IUseCase[]>;

    getUseCasesByUseCaseId(caseId: string, email: string): Promise<IUseCase>;

    updateUseCase(data: IUseCase, email: string): Promise<IUseCase>;

    createCase(data: IUseCase, email: string): Promise<IUseCase>;
}
