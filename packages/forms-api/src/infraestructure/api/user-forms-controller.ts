import { BodyParams, Controller, Get, Post } from "@tsed/common";
import { IUserForms } from "../../core/domain/user-forms";
import { UserFormsUseCase } from "../../core/use-cases/user-forms-use-case";

@Controller("/user-forms")
export class UserFormsController {

    public constructor(private readonly _userFormsUseCase: UserFormsUseCase) {}

    @Get("/")
    async getUserForms(): Promise<IUserForms[]> {
        return await this._userFormsUseCase.getUserForms();
    }

    @Post("/")
    async saveUserForms(@BodyParams() data: IUserForms): Promise<IUserForms> {
        return await this._userFormsUseCase.saveUserForms(data);
    }
}
