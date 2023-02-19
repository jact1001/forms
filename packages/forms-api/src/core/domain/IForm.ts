import {Model, ObjectID} from "@tsed/mongoose";
import {Property} from "@tsed/schema";

@Model()
export class IForm {
    @ObjectID("id")
    _id: string;
    @Property()
    formName: string;
    @Property()
    sections: Section[];
}

@Model()
export class Section {
    @ObjectID("id")
    _id: string;
    @Property()
    permissions: Permissions[];
    @Property()
    fields: Field[];
}

@Model()
export class Permissions {
    @ObjectID("id")
    _id: string;
    @Property()
    roleId: string;
    @Property()
    text: string;
    @Property()
    permission: string[];
}

@Model()
export class Field {
    @ObjectID("id")
    _id: string;
    @Property()
    isRequired: boolean;
    @Property()
    type: string;
    @Property()
    label: string;
    @Property()
    values?: {
        id: string,
        text: string
    };
    @Property()
    placeholder: string;
    @Property()
    maxLength: string;
}
