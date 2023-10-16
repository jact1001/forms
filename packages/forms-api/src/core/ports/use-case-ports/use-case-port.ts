import { IUseCase } from "../../domain/use-case";

export interface IUseCasePort {
    saveUseCase(useCase): Promise<IUseCase>;
}
