import {Controller, Get, UseBefore} from "@tsed/common";
import { FormFieldsUseCase } from "../../core/use-cases/form-fields-use-case";
import { IFormFields } from "../../core/domain/form-fields";
import { AuthTokenMiddleware } from "../middlewares/auth-middleware";

@Controller("/form-fields")
@UseBefore(AuthTokenMiddleware)
export class FormFieldsController {

    public constructor(private readonly _formFieldsUseCase: FormFieldsUseCase) {}

    @Get("/")
    async getField(): Promise<IFormFields> {
        return await this._formFieldsUseCase.getFormFields();
    }

}
