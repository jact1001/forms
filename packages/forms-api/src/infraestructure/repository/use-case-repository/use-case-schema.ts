import { Model, ObjectID, Schema } from "@tsed/mongoose";
import { CollectionOf, Property } from "@tsed/schema";
import { IAccess, ISection } from "../../../core/domain/form";
import { Checkbox, Date, Email, Number, Radio, Select, Text, TextArea, Time } from "../form-fields-repository/form-fields-schema";
import { ICaseState, IUseCase } from "../../../core/domain/use-case";
import {IField} from "../../../core/domain/form-fields";

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
    id: string;
    @Property()
    sectionName: string;
    @CollectionOf(Access)
    access: Access[];
    @Property()
    fields: Array<IField>;
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
    id: string;
    @Property()
    case_name: string;
    @Property()
    case_state: CaseState;
    @Property()
    form_id: string;
    @Property()
    form_name: string;
    @CollectionOf(Section)
    sections: Section[];
}
