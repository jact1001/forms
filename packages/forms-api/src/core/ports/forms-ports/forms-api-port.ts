import {IForm} from "../../domain/form";

export interface IFormApiPort {
    getForms(): Promise<IForm[]>;
    getFormById(idForm): Promise<IForm>;
    saveForm(form, email): Promise<IForm>;
    updateForm(form): Promise<IForm>;
}
