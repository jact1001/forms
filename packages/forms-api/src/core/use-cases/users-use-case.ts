import {OnDestroy} from "@tsed/common";
import {IUserApiPort} from "../ports/users-ports/users-api-port";
import {IUser} from "../domain/user";
import {IUsersService} from "../services/i-users-service";

export class UsersUseCase implements IUserApiPort, OnDestroy {

    constructor(private readonly usersService: IUsersService) {
    }

    public async getUsers(email: string): Promise<IUser[]> {
        return this.usersService.getUsers(email);
    }

    public async getUserByEmail(email: string): Promise<IUser> {
        return this.usersService.getUserByEmail(email);
    }

    public async saveUser(user: IUser): Promise<IUser> {
        return this.usersService.saveUser(user);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
