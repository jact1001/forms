import {BodyParams, Context, Controller, Get, PathParams, Put, Response, UseBefore} from "@tsed/common";
import {UseCaseUseCase} from "../../core/use-cases/use-case-use-case";
import e, {Response as ExpressResponse} from 'express';
import {AuthTokenMiddleware} from "../middlewares/auth-middleware";
import {IUseCase} from "../../core/domain/use-case";
import {IUseCasePort} from "../../core/ports/use-case-ports/use-case-port";
import {UseCaseService} from "../../core/services/impl/use-case-service";
import {UseCaseRepository} from "../repository/use-case-repository/use-case-repository";
import {UserFormsRepository} from "../repository/user-forms-repository/user-forms-repository";
import {UseCaseRepositorySQL} from "../repository/use-case-repository/use-case-repository-sql";
import {UserFormsRepositorySQL} from "../repository/user-forms-repository/user-forms-repository-sql";

@Controller("/use-case")
@UseBefore(AuthTokenMiddleware)
export class UseCaseController {

    private _useCaseUseCase: IUseCasePort;
    private _useCaseUseCaseSQL: IUseCasePort;

    public constructor(private useCaseRepository: UseCaseRepository,
                       private userFormsRepository: UserFormsRepository,
                       private useCaseRepositorySQL: UseCaseRepositorySQL,
                       private userFormsRepositorySQL: UserFormsRepositorySQL) {
        const service = new UseCaseService(useCaseRepository, userFormsRepository);
        this._useCaseUseCase = new UseCaseUseCase(service);
        const serviceSQL = new UseCaseService(useCaseRepositorySQL, userFormsRepository);
        this._useCaseUseCaseSQL = new UseCaseUseCase(serviceSQL);
    }

    @Get("/:caseId")
    async getUseCaseById(@PathParams('caseId') caseId: string, @Response() res: ExpressResponse, @Context() ctx: Context): Promise<e.Response<string, Record<string, IUseCase>>> {
        const email = ctx.get("email");
        let useCase = null;
        if (email == "jact1001@gmail.com") {
            useCase = await this._useCaseUseCaseSQL.getUseCasesByUseCaseId(caseId, email);
        } else {
            useCase = await this._useCaseUseCaseSQL.getUseCasesByUseCaseId(caseId, email);
        }
        if (!useCase) {
            return res.status(404).json({error: `El caso de uso con el ID: ${caseId} no pudo ser encontrado`});
        }
        return res.status(200).json(useCase);
    }

    @Put("/")
    async updateUseCase(@BodyParams() data: IUseCase, @Context() ctx: Context): Promise<IUseCase> {
        const email = ctx.get("email");
        if (email == "jact1001@gmail.com") {
            return await this._useCaseUseCaseSQL.updateUseCase(data, email);
        } else {
            return await this._useCaseUseCase.updateUseCase(data, email);
        }
    }

}
