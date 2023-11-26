import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {User} from "./users-schema";
import {IUserRepositoryPort} from "../../../core/ports/users-ports/users-repository-port";
import {IUser} from "../../../core/domain/user";

@Injectable()
export class UsersRepository implements IUserRepositoryPort, OnDestroy {
    @Inject(User)
    private model: MongooseModel<User>;

    public async findUsers (email: string) {
        return this.model.find({email: {$ne: email}});
    }

    public async saveUser (user: IUser) {
        const newUser = new this.model(user);
        return newUser.save();
    }

    public async findUserByEmail (email: string) {
        return await this.model.findOne({email: email}).exec();
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
