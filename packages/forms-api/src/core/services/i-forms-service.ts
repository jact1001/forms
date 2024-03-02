import {IForm} from "../domain/form";


export interface IFormsService {
    getForms(): Promise<IForm[]>;
    getFormById(idForm): Promise<IForm>;
    saveForm(form, email): Promise<IForm>;
    updateForm(form, email): Promise<IForm>;
}
