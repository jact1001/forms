import {Injectable, OnDestroy, Scope} from "@tsed/common";
import { UsersService } from "../services/users-service";
import { IUserApiPort } from "../ports/users-ports/users-api-port";
import { IUser } from "../domain/user";

@Injectable()
@Scope('request')
export class UsersUseCase implements IUserApiPort, OnDestroy {

    constructor(private readonly usersService: UsersService) {}

    public async getUsers(): Promise<IUser[]> {
        return this.usersService.getUsers();
    }

    public async saveUser(user: IUser): Promise<IUser> {
        return this.usersService.saveForm(user);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
