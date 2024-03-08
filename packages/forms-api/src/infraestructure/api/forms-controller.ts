import {BodyParams, Context, Controller, Get, PathParams, Post, Put, Request, Response, UseBefore} from "@tsed/common";
import {FormsUseCase} from "../../core/use-cases/forms-use-case";
import {IForm} from "../../core/domain/form";
import e, {Response as ExpressResponse} from 'express';
import {AuthTokenMiddleware} from "../middlewares/auth-middleware";
import {FormsRepository} from "../repository/forms-repository/forms-repository";
import {FormsService} from "../../core/services/impl/forms-service";
import {UsersRepository} from "../repository/users-repository/users-repository";
import {UserFormsRepository} from "../repository/user-forms-repository/user-forms-repository";
import {UseCaseRepository} from "../repository/use-case-repository/use-case-repository";
import {FormsRepositorySQL} from "../repository/forms-repository/forms-repository-sql";
import {UsersRepositorySQL} from "../repository/users-repository/users-repository-sql";
import {UserFormsRepositorySQL} from "../repository/user-forms-repository/user-forms-repository-sql";
import {UseCaseRepositorySQL} from "../repository/use-case-repository/use-case-repository-sql";
import {IFormApiPort} from "../../core/ports/forms-ports/forms-api-port";

@Controller("/forms")
@UseBefore(AuthTokenMiddleware)
export class FormsController {

    private _formsUseCase: IFormApiPort;
    private _formsUseCaseSql: IFormApiPort;

    public constructor(private formRepository: FormsRepository,
                       private userRepository: UsersRepository,
                       private userFormsRepository: UserFormsRepository,
                       private caseRepository: UseCaseRepository,
                       private formRepositorySql: FormsRepositorySQL,
                       private userRepositorySql: UsersRepositorySQL,
                       private userFormsRepositorySql: UserFormsRepositorySQL,
                       private caseRepositorySql: UseCaseRepositorySQL
    ) {
        const formService = new FormsService(formRepository, userRepository, userFormsRepository, caseRepository);
        this._formsUseCase = new FormsUseCase(formService);
        const formServiceSql = new FormsService(formRepositorySql, userRepositorySql, userFormsRepositorySql, caseRepositorySql);
        this._formsUseCaseSql = new FormsUseCase(formServiceSql);
    }

    @Get("/:formId")
    async getFormById(@Context() ctx: Context, @PathParams('formId') formId: string, @Response() res: ExpressResponse): Promise<e.Response<any, Record<string, any>>> {
        const email = ctx.get("email");
        let form = null;
        if (email == "jact1001@gmail.com") {
            form = await this._formsUseCaseSql.getFormById(formId);
        }
        form = await this._formsUseCase.getFormById(formId);
        if (!form) {
            return res.status(404).json({error: `El formulario con el ID: ${formId} no pudo ser encontrado`});
        }
        return res.status(200).json(form);
    }

    @Post("/")
    async saveForm(@BodyParams() data: IForm, @Context() ctx: Context): Promise<IForm> {
        const email = ctx.get("email");
        if (email == "jact1001@gmail.com") {
            return await this._formsUseCaseSql.saveForm(data, email);
        }
        return await this._formsUseCase.saveForm(data, email);
    }

    @Put("/:formId")
    async updateForm(@BodyParams() data: IForm, @Context() ctx: Context): Promise<IForm> {
        const email = ctx.get("email");
        if (email == "jact1001@gmail.com") {
            return await this._formsUseCaseSql.updateForm(data, email);
        }
        return await this._formsUseCase.updateForm(data, email);
    }

}
