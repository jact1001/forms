import {Model, ObjectID, Schema} from "@tsed/mongoose";
import {CollectionOf, Property} from "@tsed/schema";
import {
    ICheckbox, IDate,
    IEmail, IFormFields,
    INumber,
    IRadio,
    ISelect,
    ISelectValue,
    IText,
    ITextArea, ITime
} from "../../../core/domain/form-fields";

@Schema()
export class Text implements IText {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    placeholder: string;
    @Property()
    maxLength: string;
}

@Schema()
export class TextArea implements ITextArea {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    placeholder: string;
    @Property()
    minLength: string;
    @Property()
    maxLength: string;
    @Property()
    rows: string;
}

@Schema()
export class Radio implements IRadio {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    name: string
}

@Schema()
export class Checkbox implements ICheckbox {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    name: string;
    @Property()
    checked: boolean
}

@Schema()
export class SelectValue implements ISelectValue {
    @Property()
    id: string;
    @Property()
    text: string;
}

@Schema()
export class Select implements ISelect {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @CollectionOf(SelectValue)
    values: SelectValue[];
}

@Schema()
export class Number implements INumber {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    placeholder: string;
    @Property()
    min: string;
}

@Schema()
export class Email implements IEmail {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    placeholder: string;
    @Property()
    maxLength: string;
}

@Schema()
export class Date implements IDate {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
}

@Schema()
export class Time implements ITime {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    value: string;
}

@Model()
export class FormFields implements IFormFields {
    @ObjectID("id")
    _id: string;
    @Property()
    description: string;
    @Property()
    fields: Array< Text | TextArea | Radio | Checkbox | Select | Number | Email | Date | Time >;
}
