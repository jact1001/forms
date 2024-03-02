import {Controller, Get, UseBefore} from "@tsed/common";
import { FormFieldsUseCase } from "../../core/use-cases/form-fields-use-case";
import { IFormFields } from "../../core/domain/form-fields";
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";
import {IFormFieldsApiPort} from "../../core/ports/form-fields-ports/form-fields-api-port";
import {FormFieldsRepository} from "../repository/form-fields-repository/form-fields-repository";
import {FormFieldsService} from "../../core/services/impl/form-fields-service";

@Controller("/form-fields")
@UseBefore(AuthTokenMiddleware)
export class FormFieldsController {
    private _formFieldsUseCase:IFormFieldsApiPort
    public constructor() {
        const repository = new FormFieldsRepository();
        const service = new FormFieldsService(repository)
        this._formFieldsUseCase = new FormFieldsUseCase(service)
    }

    @Get("/")
    async getField(): Promise<IFormFields> {
        return await this._formFieldsUseCase.getFormFields();
    }

}
