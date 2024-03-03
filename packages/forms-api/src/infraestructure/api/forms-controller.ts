import {BodyParams, Context, Controller, Get, PathParams, Post, Put, Request, Response, UseBefore} from "@tsed/common";
import { FormsUseCase } from "../../core/use-cases/forms-use-case";
import { IForm } from "../../core/domain/form";
import e, { Response as ExpressResponse } from 'express';
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";
import {FormsRepository} from "../repository/forms-repository/forms-repository";
import {FormsService} from "../../core/services/impl/forms-service";
import {IUserApiPort} from "../../core/ports/users-ports/users-api-port";
import {UsersUseCase} from "../../core/use-cases/users-use-case";
import {UsersService} from "../../core/services/impl/users-service";
import {UsersRepository} from "../repository/users-repository/users-repository";
import {UserFormsUseCase} from "../../core/use-cases/user-forms-use-case";
import {UserFormsService} from "../../core/services/impl/user-forms-service";
import {UserFormsRepository} from "../repository/user-forms-repository/user-forms-repository";
import {UseCaseUseCase} from "../../core/use-cases/use-case-use-case";

@Controller("/forms")
@UseBefore(AuthTokenMiddleware)
export class FormsController {

    private _formsUseCase: FormsUseCase;
    public constructor() {
        const formRepository = new FormsRepository();
        const userRepository = new UsersRepository();
        const userFormsRepository = new UserFormsRepository();

        const userFormsService = new UserFormsService(userFormsRepository, this._formsUseCase, userUseCase, caseUseCase);
        const userFormsUseCase = new UserFormsUseCase();

        const userService = new UsersService(userRepository, userFormsUseCase);
        const userUseCase = new UsersUseCase(userService);

        const caseUseCase = new UseCaseUseCase();

        const formService = new FormsService(formRepository, )
    }

    @Get("/:formId")
    async getFormById(@PathParams('formId') formId: string, @Response() res: ExpressResponse): Promise<e.Response<any, Record<string, any>>> {
        const form = await this._formsUseCase.getFormById(formId);
        if (!form) {
            return res.status(404).json({ error: `El formulario con el ID: ${formId} no pudo ser encontrado` });
        }
        return res.status(200).json(form);
    }

    @Post("/")
    async saveForm(@BodyParams() data: IForm, @Context() ctx: Context): Promise<IForm> {
        const email = ctx.get("email");
        return await this._formsUseCase.saveForm(data, email);
    }

    @Put("/:formId")
    async updateForm(@BodyParams() data: IForm,  @Context() ctx: Context): Promise<IForm> {
        const email = ctx.get("email");
        return await this._formsUseCase.updateForm(data, email);
    }

}
