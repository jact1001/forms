import {Controller, Get} from "@tsed/common";
import {FieldUseCase} from "../../core/use-cases/field-use-case";

@Controller("/fields")
export class FormFieldsController {

    public constructor(private readonly _fieldUseCase: FieldUseCase) {
    }

    @Get("/")
    async getField(): Promise<any> {
        return await this._fieldUseCase.getField();
    }

}
