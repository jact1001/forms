import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { UsersRepository } from "../../infraestructure/repository/users-repository/users-repository";
import { IUser } from "../domain/user";
import { UserFormsUseCase } from "../use-cases/user-forms-use-case";

@Injectable()
@Scope('request')
export class UsersService implements OnDestroy {

    constructor(
        private readonly userRepository: UsersRepository,
        private readonly userFormsUseCase: UserFormsUseCase,
    ) {}

    public async getUsers(email: string): Promise<IUser[]> {
        return await this.userRepository.findUsers(email);
    }

    public async getUserByEmail(email: string): Promise<IUser> {
        return await this.userRepository.findUserByEmail(email);
    }

    public async saveUser(user: IUser): Promise<IUser> {
        const userExist: IUser = await this.userRepository.findUserByEmail(user.email);
        if (!userExist) return await this.userRepository.saveUser(user);
        await this.userFormsUseCase.createDefaultUserForms(user.email);
        return userExist;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
