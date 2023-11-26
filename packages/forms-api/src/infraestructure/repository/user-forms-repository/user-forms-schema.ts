import { Model, ObjectID, Schema } from "@tsed/mongoose";
import { CollectionOf, Property } from "@tsed/schema";
import {IUserForm, IFormCase, IUserForms, IUseCaseState} from "../../../core/domain/user-forms";

@Schema()
export class UseCaseState implements IUseCaseState {
    @Property()
    id: string;
    @Property()
    name: string;
}

@Schema()
export class FormCase implements IFormCase {
    @ObjectID("id")
    case_id: string;
    @Property()
    state: UseCaseState;
    @Property()
    name: string;
}

@Schema()
export class UserForm implements IUserForm {
    @Property()
    form_id: string;
    @Property()
    form_name: string;
    @Property()
    form_author: string;
    @CollectionOf(FormCase)
    cases?: FormCase[];
}

@Model()
export class UserForms implements IUserForms {
    @Property()
    user_id: string;
    @CollectionOf(UserForm)
    forms: UserForm[];
}
