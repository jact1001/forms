import {Model, ObjectID, Schema} from "@tsed/mongoose";
import {CollectionOf, Property} from "@tsed/schema";

@Schema()
export class Text {
    @Property()
    id: string;
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
    id: string;
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
    id: string;
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
    id: string;
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
    id: string;
    @Property()
    text: string;
}

@Schema()
export class Select {
    @Property()
    id: string;
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
    id: string;
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
    id: string;
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
    id: string;
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
    id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    value: string;
}

@Schema()
export class Fields {
    @Property()
    fieldText: Text;
    @Property()
    fieldTextArea: TextArea;
    @Property()
    fieldRadio: Radio;
    @Property()
    fieldCheckbox: Checkbox;
    @Property()
    fieldSelect: Select;
    @Property()
    fieldNumber: Number;
    @Property()
    fieldEmail: Email;
    @Property()
    fieldDate: Date;
    @Property()
    fieldTime: Time; 
}

@Model()
export class Field {
    @ObjectID("id")
    _id: string;
    @Property()
    description: string;
    @Property()
    fields: Fields; 
}