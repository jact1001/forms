export interface IText {
    field_id: string;
    form_field_id: string;
    is_required: boolean;
    type: string;
    label: string;
    value: string;
    placeholder: string;
    max_length: string;
    label_placeholder: string;
}

export interface ITextArea {
    field_id: string;
    form_field_id: string;
    is_required: boolean;
    type: string;
    label: string;
    value: string;
    placeholder: string;
    min_length: string;
    max_length: string;
    rows: string;
    label_placeholder: string;
}

export interface IOptionValue {
    id: string;
    text: string;
}

export interface IRadio {
    field_id: string;
    form_field_id: string;
    is_required: boolean;
    type: string;
    label: string;
    value: IOptionValue;
    options: IOptionValue[];
    option_placeholder: string;
    label_placeholder: string;
}

export interface ICheckbox {
    field_id: string;
    form_field_id: string;
    is_required: boolean;
    type: string;
    label: string;
    name: string;
    checked: boolean;
    options: IOptionValue[];
    option_placeholder: string;
    label_placeholder: string;

}

export interface ISelect {
    field_id: string;
    form_field_id: string;
    is_required: boolean;
    type: string;
    label: string;
    values: IOptionValue[];
    option_placeholder: string;
    label_placeholder: string;
}

export interface INumber {
    field_id: string;
    form_field_id: string;
    is_required: boolean;
    type: string;
    label: string;
    placeholder: string;
    min: string;
    label_placeholder: string;
}

export interface IEmail {
    field_id: string;
    form_field_id: string;
    isRequired: boolean;
    type: string;
    label: string;
    placeholder: string;
    maxLength: string;
    label_placeholder: string;
}

export interface IDate {
    field_id: string;
    form_field_id: string;
    is_required: boolean;
    type: string;
    label: string;
    label_placeholder: string;
}

export interface ITime {
    field_id: string;
    form_field_id: string;
    is_required: boolean;
    type: string;
    label: string;
    value: string;
    label_placeholder: string;
}

//export interface IField extends IText, ITextArea, IRadio, ICheckbox, ISelect, INumber, IEmail, IDate, ITime {};

export type TField = IText | ITextArea | IRadio | ICheckbox | ISelect | INumber | IEmail | IDate | ITime;

export interface IFormFields {
    _id: string;
    description: string;
    fields: Array<TField>;
}
