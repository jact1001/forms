import { IForm } from "../../domain/form";

export interface IFormRepositoryPort {
    findForms(): Promise<IForm[]>;
    saveForm(form): Promise<IForm>;
    findForm(formId): Promise<IForm>;
    updateForm(form): Promise<IForm>;
}
