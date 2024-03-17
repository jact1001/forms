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

import { GroupSql } from "../util/groups-sql";

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
    
    private handlerFormCase (email: string): IFormApiPort {
        if (GroupSql.belongsToGroupSql(email)) return this._formsUseCaseSql;
        return this._formsUseCase;
    }

    @Get("/:formId")
    async getFormById(@Context() ctx: Context, @PathParams('formId') formId: string, @Response() res: ExpressResponse): Promise<e.Response<any, Record<string, any>>> {
        const email = ctx.get("email");
        const form = await this.handlerFormCase(email).getFormById(formId);

        if (!form) {
            return res.status(404).json({error: `El formulario con el ID: ${formId} no pudo ser encontrado`});
        }
        return res.status(200).json(form);
    }

    @Post("/")
    async saveForm(@BodyParams() data: IForm, @Context() ctx: Context): Promise<IForm> {
        const email = ctx.get("email");
        return await this.handlerFormCase(email).saveForm(data, email);
    }

    @Put("/:formId")
    async updateForm(@BodyParams() data: IForm, @Context() ctx: Context): Promise<IForm> {
        const email = ctx.get("email");
        return await this.handlerFormCase(email).updateForm(data,email);
    }

}
