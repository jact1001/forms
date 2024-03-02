import {OnDestroy} from "@tsed/common";
import {IUser} from "../../domain/user";
import {IUsersService} from "../i-users-service";
import {IUserRepositoryPort} from "../../ports/users-ports/users-repository-port";
import {IUserFormsApiPort} from "../../ports/user-forms-ports/user-forms-port";

export class UsersService implements IUsersService, OnDestroy {

    constructor(
        private readonly userRepository: IUserRepositoryPort,
        private readonly userFormsUseCase: IUserFormsApiPort,
    ) {
    }

    public async getUsers(email: string): Promise<IUser[]> {
        return await this.userRepository.findUsers(email);
    }

    public async getUserByEmail(email: string): Promise<IUser> {
        return await this.userRepository.findUserByEmail(email);
    }

    public async saveUser(user: IUser): Promise<IUser> {
        const userExist: IUser = await this.userRepository.findUserByEmail(user.email);
        let newUser: IUser;

        if (!userExist) {
            newUser = await this.userRepository.saveUser(user);
        } else {
            newUser = userExist;
        }

        await this.userFormsUseCase.createDefaultUserForms(user.email);
        return newUser;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
