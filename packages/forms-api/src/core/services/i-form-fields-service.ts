import {IFormFields} from "../domain/form-fields";

export interface IFormFieldsService {
    getFormFields(): Promise<IFormFields>;
}
