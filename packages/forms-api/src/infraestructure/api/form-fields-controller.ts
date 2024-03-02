import {Context, Controller, Get, UseBefore} from "@tsed/common";
import { FormFieldsUseCase } from "../../core/use-cases/form-fields-use-case";
import { IFormFields } from "../../core/domain/form-fields";
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";
import {IFormFieldsApiPort} from "../../core/ports/form-fields-ports/form-fields-api-port";
import {FormFieldsRepository} from "../repository/form-fields-repository/form-fields-repository";
import {FormFieldsService} from "../../core/services/impl/form-fields-service";
import {FormFieldsRepositorySQL} from "../repository/form-fields-repository/form-fields-repository-sql";

@Controller("/form-fields")
@UseBefore(AuthTokenMiddleware)
export class FormFieldsController {
    private _formFieldsUseCase:IFormFieldsApiPort
    private _formFieldsUseCaseSQL:IFormFieldsApiPort
    public constructor() {
        const repository = new FormFieldsRepository();
        const service = new FormFieldsService(repository)
        this._formFieldsUseCase = new FormFieldsUseCase(service)
        const repositorySQL = new FormFieldsRepositorySQL();
        const serviceSQL = new FormFieldsService(repositorySQL)
        this._formFieldsUseCaseSQL = new FormFieldsUseCase(serviceSQL)
    }

    @Get("/")
    async getField( @Context() ctx: Context): Promise<IFormFields> {
        const email = ctx.get("email");
        if(email == "jact1001@gmail.com"){
            return await this._formFieldsUseCase.getFormFields();
        }
        return await this._formFieldsUseCaseSQL.getFormFields();
    }

}
