import {Controller, Get} from "@tsed/common";
import {FieldUseCase} from "../../core/application/use-cases/field-use-case";

@Controller("/field")
export class FieldController {

    public constructor(private readonly _fieldUseCase: FieldUseCase) {
    }

    @Get("/")
    async getForm(): Promise<any> {
        return await this._fieldUseCase.getField();
    }

}