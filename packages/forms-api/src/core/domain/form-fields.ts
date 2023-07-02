export interface IText {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
    placeholder: string;
    maxLength: string;
}

export interface ITextArea {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
    placeholder: string;
    minLength: string;
    maxLength: string;
    rows: string;
}

export interface IRadio {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
    name: string
}

export interface ICheckbox {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
    name: string;
    checked: boolean
}

export interface ISelectValue {
    id: string;
    text: string;
}

export interface ISelect {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
    values: ISelectValue[];
}

export interface INumber {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
    placeholder: string;
    min: string;
}

export interface IEmail {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
    placeholder: string;
    maxLength: string;
}

export interface IDate {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
}

export interface ITime {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
    value: string;
}

export interface IFormFields {
    _id: string;
    description: string;
    fields: Array< IText | ITextArea | IRadio | ICheckbox | ISelect | INumber | IEmail | IDate | ITime >;
}
