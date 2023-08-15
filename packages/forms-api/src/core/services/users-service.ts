import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { UsersRepository } from "../../infraestructure/repository/users-repository/users-repository";
import { IUser } from "../domain/user";

@Injectable()
@Scope('request')
export class UsersService implements OnDestroy {

    constructor(private readonly userRepository: UsersRepository) {}

    public async getUsers(): Promise<IUser[]> {
        const data = await this.userRepository.findUsers();
        return data;
    }

    public async saveForm(user: IUser): Promise<IUser> {
        const data = await this.userRepository.saveUser(user);
        return data;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
