import {Model, ObjectID, Schema} from "@tsed/mongoose";
import {CollectionOf, Property} from "@tsed/schema";

@Schema()
export class Text {
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
export class TextArea {
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
export class Radio {
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
export class Checkbox {
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
export class SelectValue {
    @Property()
    field_id: string;
    @Property()
    form_field_id: string;
    @Property()
    text: string;
}

@Schema()
export class Select {
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
export class Number {
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
export class Email {
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
export class Date {
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
export class Time {
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
export class FormFields {
    @ObjectID("id")
    _id: string;
    @Property()
    description: string;
    @Property()
    fields: Array< Text | TextArea | Radio | Checkbox | Select | Number | Email | Date | Time >;
}
