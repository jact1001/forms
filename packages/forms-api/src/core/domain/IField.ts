import {Model, ObjectID, Schema} from "@tsed/mongoose";
import {CollectionOf, Property} from "@tsed/schema";


// crear esquemas de los fields

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