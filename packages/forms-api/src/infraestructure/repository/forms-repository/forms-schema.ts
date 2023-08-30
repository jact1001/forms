import { Model, ObjectID, Schema } from "@tsed/mongoose";
import { CollectionOf, Property } from "@tsed/schema";
import { IAccess, IForm, ISection } from "../../../core/domain/form";
import { Checkbox, Date, Email, Number, Radio, Select, Text, TextArea, Time } from "../form-fields-repository/form-fields-schema";

@Schema()
export class Access implements IAccess {
    @Property()
    userId: string;
    @Property()
    userName: string;
    @CollectionOf(String)
    permission: string[];
}

@Schema()
export class Section implements ISection {
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
export class Form implements IForm {
    @ObjectID("id")
    id: string;
    @Property()
    form_name: string;
    @Property()
    state: string;
    @CollectionOf(Section)
    sections: Section[];
}
