import { IUseCase } from "../../domain/use-case";

export interface IUseCaseRepositoryPort {
    findUseCase(useCaseId, email): Promise<IUseCase>;
    saveUseCase(useCase): Promise<IUseCase>;
    updateUseCase(useCase): Promise<IUseCase>;
}
