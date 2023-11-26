import {BodyParams, Context, Controller, Get, PathParams, Post, Put, Request, Response, UseBefore} from "@tsed/common";
import { FormsUseCase } from "../../core/use-cases/forms-use-case";
import { IForm } from "../../core/domain/form";
import e, { Response as ExpressResponse } from 'express';
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";
import * as jwt from 'jsonwebtoken';

@Controller("/forms")
@UseBefore(AuthTokenMiddleware)
export class FormsController {

    public constructor(private readonly _formsUseCase: FormsUseCase) {}

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
