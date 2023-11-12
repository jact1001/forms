export interface IUseCaseState {
    id: string;
    name: string;
}

export interface IFormCase {
    case_id: string;
    state: IUseCaseState;
    name: string;
}

export interface IUserForm {
    form_id: string;
    form_name: string;
    form_author: string;
    cases?: IFormCase [];
}

export interface IUserForms {
    user_id: string;
    forms: IUserForm[];
}
