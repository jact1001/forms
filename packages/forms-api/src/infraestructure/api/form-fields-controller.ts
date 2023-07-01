import {Controller, Get} from "@tsed/common";
import {FormFieldsUseCase} from "../../core/use-cases/form-fields-use-case";

@Controller("/form-fields")
export class FormFieldsController {

    public constructor(private readonly _formFieldsUseCase: FormFieldsUseCase) {}

    @Get("/")
    async getField(): Promise<any> {
        return await this._formFieldsUseCase.getFormFields();
    }

}
