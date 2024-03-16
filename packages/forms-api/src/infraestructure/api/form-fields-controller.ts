import {Context, Controller, Get, UseBefore} from "@tsed/common";
import {FormFieldsUseCase} from "../../core/use-cases/form-fields-use-case";
import {IFormFields} from "../../core/domain/form-fields";
import {AuthTokenMiddleware} from "../middlewares/auth-middleware";
import {IFormFieldsApiPort} from "../../core/ports/form-fields-ports/form-fields-api-port";
import {FormFieldsRepository} from "../repository/form-fields-repository/form-fields-repository";
import {FormFieldsService} from "../../core/services/impl/form-fields-service";
import {FormFieldsRepositorySQL} from "../repository/form-fields-repository/form-fields-repository-sql";

import { GroupSql } from '../util/groups-sql';

@Controller("/form-fields")
@UseBefore(AuthTokenMiddleware)
export class FormFieldsController {
    private _formFieldsUseCase: IFormFieldsApiPort
    private _formFieldsUseCaseSQL: IFormFieldsApiPort

    public constructor(private repository: FormFieldsRepository,
                       private repositorySQL: FormFieldsRepositorySQL) {
        const service = new FormFieldsService(repository)
        this._formFieldsUseCase = new FormFieldsUseCase(service)
        const serviceSQL = new FormFieldsService(repositorySQL)
        this._formFieldsUseCaseSQL = new FormFieldsUseCase(serviceSQL)
    }

    private handlerUserCase (email: string): IFormFieldsApiPort {
        if (GroupSql.belongsToGroupSql(email)) return this._formFieldsUseCaseSQL;
        return this._formFieldsUseCase;
    }

    @Get("/")
    async getField(@Context() ctx: Context): Promise<IFormFields> {
        return await this.handlerUserCase(ctx.get("email")).getFormFields();
    }

}
