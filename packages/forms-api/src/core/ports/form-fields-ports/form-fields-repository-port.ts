import { IFormFields } from "../../domain/form-fields";

export interface IFormFieldsRepositoryPort {
    findFormFields(): Promise<IFormFields[]>;
}
