export interface ICaseState {
    id: string;
    name: string;
}

export interface ICase {
    id?: string;
    case_name: string;
    form_id: string;
    case_state?: ICaseState;
    case_creator?: string;
}
