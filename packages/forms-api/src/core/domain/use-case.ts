import { ISection } from "./form";

export interface ICaseState {
    id: string;
    name: string;
}

export interface IUseCase {
    _id: string;
    case_name: string;
    case_state: ICaseState;
    form_id: string;
    sections: ISection[];
}
