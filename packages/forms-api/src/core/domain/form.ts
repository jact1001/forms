import { TField } from "./form-fields";

export interface IAccess {
    userId: string;
    userName: string;
    permission: string[];
}

export interface ISection {
    _id: string;
    sectionName: string;
    access: IAccess[];
    fields: Array<TField>;
}

export interface IForm {
    id: string;
    form_name: string;
    state: string;
    sections: ISection[];
}
