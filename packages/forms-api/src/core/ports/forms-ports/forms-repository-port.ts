import { IForm } from "../../domain/form";

export interface IFormRepositoryPort {
    findForms(): Promise<IForm[]>;
    saveForm(form): Promise<IForm>;
}
