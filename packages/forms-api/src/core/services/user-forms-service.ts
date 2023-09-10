import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { UsersRepository } from "../../infraestructure/repository/users-repository/users-repository";
import { IUser } from "../domain/user";
import {UserFormsRepository} from "../../infraestructure/repository/user-forms/user-forms-repository";
import {IUserForms} from "../domain/user-forms";

@Injectable()
@Scope('request')
export class UserFormsService implements OnDestroy {

    constructor(
        private readonly userFormsRepository: UserFormsRepository,
        private readonly userRepository: UsersRepository
    ) {}

    public async getUserForms(email: string): Promise<IUserForms> {
        const user: IUser = await this.userRepository.findUserByEmail(email);
        const data = await this.userFormsRepository.findUserForms(user._id);
        return data;
    }

    public async saveUserForms(userForm: IUserForms): Promise<IUserForms> {
        const data = await this.userFormsRepository.saveUserForms(userForm);
        return data;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
