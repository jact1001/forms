import { BodyParams, Context, Controller, Get, Post, UseBefore } from "@tsed/common";
import { IUserForms } from "../../core/domain/user-forms";
import { UserFormsUseCase } from "../../core/use-cases/user-forms-use-case";
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";

@Controller("/user-forms")
@UseBefore(AuthTokenMiddleware)
export class UserFormsController {

    public constructor(private readonly _userFormsUseCase: UserFormsUseCase) {}

    @Get("/")
    async getUserForms(@Context() ctx: Context): Promise<IUserForms> {
        const email = ctx.get("email");
        return await this._userFormsUseCase.getUserForms(email);
    }

    @Post("/use-case")
    async createCase(@BodyParams() {useCase, formId, ...props }, @Context() ctx: Context): Promise<IUserForms> {
        const email = ctx.get("email");
        return await this._userFormsUseCase.createCase(useCase, formId, email);
    }
}
