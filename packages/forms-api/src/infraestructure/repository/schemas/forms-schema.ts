import {Model, ObjectID, Schema} from "@tsed/mongoose";
import {CollectionOf, Property} from "@tsed/schema";
import {Checkbox, Date, Email, Number, Radio, Select, Text, TextArea, Time} from "./form-fields-schema";

@Schema()
export class Access {
    @Property()
    userId: string;
    @Property()
    userName: string;
    @CollectionOf(String)
    permission: string[];
}

@Schema()
export class Section {
    @ObjectID("id")
    _id: string;
    @Property()
    sectionName: string;
    @CollectionOf(Access)
    access: Access[];
    @Property()
    fields: Array< Text | TextArea | Radio | Checkbox | Select | Number | Email | Date | Time >;
}

@Model()
export class Form {
    @ObjectID("id")
    _id: string;
    @Property()
    formName: string;
    @Property()
    state: string;
    @CollectionOf(Section)
    sections: Section[];
}
