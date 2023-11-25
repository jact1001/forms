import { IField } from "./form-fields";

export interface IAccess {
    userId: string;
    userName: string;
    permission: string[];
}

export interface ISection {
    id: string;
    sectionName: string;
    access: IAccess[];
    fields: Array<IField>;
}

export interface IForm {
    id: string;
    form_name: string;
    state: string;
    author: string;
    sections: ISection[];
}
