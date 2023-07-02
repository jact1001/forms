import {IForm} from "../../domain/form";

export interface IFormApiPort {
    getForms(): Promise<IForm[]>;
    saveForm(form): Promise<IForm>;
}
