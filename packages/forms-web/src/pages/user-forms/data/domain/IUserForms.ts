export interface IFormCase {
    case_id: string;
    case_name: string;
    state: {
        id: string;
        name: string;
    };
}

export interface IUserForm {
    form_id: string;
    form_name: string;
    cases?: IFormCase [];
}

export interface IUserForms {
    user_id: string;
    forms: IUserForm[];
}
