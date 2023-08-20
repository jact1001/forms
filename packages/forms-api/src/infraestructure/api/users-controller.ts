import { BodyParams, Controller, Get, Post } from "@tsed/common";
import { IUser } from "../../core/domain/user";
import { UsersUseCase } from "../../core/use-cases/users-use-case";

@Controller("/users")
export class UsersController {

    public constructor(private readonly _usersUseCase: UsersUseCase) {}

    @Get("/")
    async getUsers(): Promise<IUser[]> {
        return await this._usersUseCase.getUsers();
    }

    @Post("/")
    async saveUser(@BodyParams() data: IUser): Promise<IUser> {
        return await this._usersUseCase.saveUser(data);
    }

}
