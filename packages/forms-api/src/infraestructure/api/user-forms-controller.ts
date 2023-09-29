import {BodyParams, Context, Controller, Get, Post, UseBefore} from "@tsed/common";
import {IFormCase, IUserForms} from "../../core/domain/user-forms";
import { UserFormsUseCase } from "../../core/use-cases/user-forms-use-case";
import {AuthTokenMiddleware} from "../middlewares/auth-middleware";

@Controller("/user-forms")
@UseBefore(AuthTokenMiddleware)
export class UserFormsController {

    public constructor(private readonly _userFormsUseCase: UserFormsUseCase) {}

    @Get("/")
    async getUserForms(@Context() ctx: Context): Promise<IUserForms> {
        const email = ctx.get("email");
        return await this._userFormsUseCase.getUserForms(email);
    }

    @Post("/")
    async saveUserForms(@BodyParams() data: IUserForms): Promise<IUserForms> {
        return await this._userFormsUseCase.saveUserForms(data);
    }

    @Post("/use-case")
    async createCase(@BodyParams() {formUseCase, formId }, @Context() ctx: Context): Promise<IUserForms> {
        const email = ctx.get("email");
        return await this._userFormsUseCase.createCase(formUseCase, formId, email);
    }
}
