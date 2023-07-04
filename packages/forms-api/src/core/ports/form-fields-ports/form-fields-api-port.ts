import { IFormFields } from "../../domain/form-fields";

export interface IFormFieldsApiPort {
    getFormFields(): Promise<IFormFields>;
}
