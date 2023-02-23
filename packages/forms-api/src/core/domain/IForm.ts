import {Model, ObjectID, Schema} from "@tsed/mongoose";
import {CollectionOf, Property} from "@tsed/schema";

@Schema()
export class InputValue {
    @Property()
    id: string;
    @Property()
    text: string;
}

@Schema()
export class Field {
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    values?: InputValue
    @Property()
    placeholder: string;
    @Property()
    maxLength: string;
}

@Schema()
export class Permissions {
    @Property()
    roleId: string;
    @Property()
    text: string;
    @CollectionOf(String)
    permission: string[];
}

@Schema()
export class Section {
    @CollectionOf(Permissions)
    permissions: Permissions[];
    @CollectionOf(Field)
    fields: Field[];
}

@Model()
export class Form {
    @ObjectID("id")
    _id: string;
    @Property()
    formName: string;
    @CollectionOf(Section)
    sections: Section[];
}
