import { Model, ObjectID, Schema } from "@tsed/mongoose";
import { CollectionOf, Property } from "@tsed/schema";
import { IAccess, ISection } from "../../../core/domain/form";
import { Checkbox, Date, Email, Number, Radio, Select, Text, TextArea, Time } from "../form-fields-repository/form-fields-schema";
import { ICaseState, IUseCase } from "../../../core/domain/use-case";

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

@Schema()
export class CaseState implements ICaseState {
    @Property()
    id: string;
    @Property()
    name: string;
}

@Model()
export class UseCase implements IUseCase {
    @ObjectID("id")
    _id: string;
    @Property()
    case_name: string;
    @Property()
    case_state: CaseState;
    @Property()
    form_id: string;
    @CollectionOf(Section)
    sections: Section[];
}