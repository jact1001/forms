import { Inject, Injectable, OnDestroy } from "@tsed/common";
import { MongooseModel } from "@tsed/mongoose";
import { User } from "./users-schema";
import { IUserRepositoryPort } from "../../../core/ports/users-ports/users-repository-port";
import { IUser } from "../../../core/domain/user";

@Injectable()
export class UsersRepository implements IUserRepositoryPort, OnDestroy {
    @Inject(User)
    private model: MongooseModel<User>;

    public async findUsers () {
        const users = await this.model.find().exec();
        return users;
    }

    public async saveUser (user: IUser) {
        const newUser = new this.model(user);
        return newUser.save();
    }

    public async findUserByEmail (email: string) {
        const user = await this.model.findOne({email: email}).exec();
        return user;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
