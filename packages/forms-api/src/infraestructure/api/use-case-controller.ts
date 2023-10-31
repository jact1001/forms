import {BodyParams, Context, Controller, Get, PathParams, Post, Put, Response, UseBefore} from "@tsed/common";
import { UseCaseUseCase } from "../../core/use-cases/use-case-use-case";
import e, { Response as ExpressResponse } from 'express';
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";
import { IUseCase } from "../../core/domain/use-case";

@Controller("/use-case")
@UseBefore(AuthTokenMiddleware)
export class UseCaseController {

    public constructor(private readonly _useCaseUseCase: UseCaseUseCase) {}

    @Get("/:caseId")
    async getUseCaseById(@PathParams('caseId') caseId: string, @Response() res: ExpressResponse): Promise<e.Response<any, Record<string, any>>> {
        const useCase = await this._useCaseUseCase.getUseCasesByUseCaseId(caseId);
        if (!useCase) {
            return res.status(404).json({ error: `El caso de uso con el ID: ${caseId} no pudo ser encontrado` });
        }
        return res.status(200).json(useCase);
    }

    @Put("/")
    async updateUseCase(@BodyParams() data: IUseCase, @Context() ctx: Context): Promise<IUseCase> {
        return await this._useCaseUseCase.updateUseCase(data);
    }

}
