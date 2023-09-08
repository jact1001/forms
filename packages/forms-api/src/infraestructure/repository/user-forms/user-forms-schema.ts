import { Model, ObjectID, Schema } from "@tsed/mongoose";
import { CollectionOf, Property } from "@tsed/schema";
import { IUserForm, IFormCase, IUserForms } from "../../../core/domain/user-forms";

@Schema()
export class FormCase implements IFormCase {
    @ObjectID("id")
    case_id: string;
    @Property()
    state: string;
}

@Schema()
export class Form implements IUserForm {
    @ObjectID("id")
    form_id: string;
    @Property()
    form_name: string;
    @CollectionOf(FormCase)
    cases: FormCase[];
}

@Model()
export class UserForms implements IUserForms {
    @ObjectID("id")
    user_id: string;
    @CollectionOf(Form)
    forms: Form[];
}
