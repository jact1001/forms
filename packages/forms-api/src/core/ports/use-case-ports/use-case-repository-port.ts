import { IUseCase } from "../../domain/use-case";

export interface IUseCaseRepositoryPort {
    findUseCase(useCaseId: string, email: string): Promise<IUseCase>;
    saveUseCase(useCase: IUseCase): Promise<IUseCase>;
    updateUseCase(useCase: IUseCase): Promise<IUseCase>;
    findUseCasesByFormId(formId: string): Promise<IUseCase[]>;
}
