import {Model, ObjectID} from "@tsed/mongoose";
import {Property} from "@tsed/schema";

@Model()
export class Test {
    @ObjectID("id")
    _id: string;
    @Property()
    unique: string;
}
