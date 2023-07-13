import { ICheckbox, IDate, IEmail, INumber, IRadio, ISelect, IText, ITextArea, ITime } from "./IFormFields";

export interface IAccess {
    userId: string;
    userName: string;
    permission: string[];
}

export interface ISection {
    _id?: string;
    sectionName: string;
    access: IAccess[];
    fields: Array< IText | ITextArea | IRadio | ICheckbox | ISelect | INumber | IEmail | IDate | ITime >;
}

export interface IForm {
    _id?: string;
    form_name: string;
    state: string;
    sections: ISection[];
}
