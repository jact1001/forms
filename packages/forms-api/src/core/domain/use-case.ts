import { ISection } from "./form";

export interface ICaseState {
    id: string;
    name: string;
}

export interface IUseCase {
    id?: string;
    case_name: string;
    case_state: ICaseState;
    form_id: string;
    form_name: string;
    sections?: ISection[];
}
