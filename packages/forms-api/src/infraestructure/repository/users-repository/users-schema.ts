import { Model, ObjectID, Schema } from "@tsed/mongoose";
import { Property } from "@tsed/schema";
import {IRole, IUser} from "../../../core/domain/user";

@Schema()
export class Role implements IRole {
    @ObjectID("id")
    _id: string;
    @Property()
    name: string;
}

@Model()
export class User implements IUser {
    @ObjectID("id")
    _id: string;
    @Property()
    user_name: string;
    @Property()
    last_name: string;
    @Property()
    email: string
    @Property()
    role: Role
}
