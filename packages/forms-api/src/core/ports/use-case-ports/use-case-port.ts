import { IUseCase } from "../../domain/use-case";
import {IForm} from "../../domain/form";

export interface IUseCasePort {
    saveUseCase(useCase): Promise<IUseCase>;
    getUseCasesByFormId (formId): Promise<IUseCase[]>;
    updateFormUseCases(newForm: IForm, email): any;
}
