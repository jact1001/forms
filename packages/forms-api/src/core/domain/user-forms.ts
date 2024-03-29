export interface IUseCaseState {
    id: string;
    name: string;
}

export interface IFormCase {
    case_id: string;
    case_creator: string;
    state: IUseCaseState;
    name: string;
}

export interface IUserForm {
    form_id: string;
    form_name: string;
    form_author: string;
    is_author?: boolean;
    cases?: IFormCase [];
}

export interface IUserForms {
    user_id: string;
    forms: IUserForm[];
}
