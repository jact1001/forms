import {Controller, Get} from "@tsed/common";
import {FieldUseCase} from "../../core/application/use-cases/field-use-case";

@Controller("/field")
export class FieldController {

    public constructor(private readonly _fieldUseCase: FieldUseCase) {
    }

    @Get("/")
    async getField(): Promise<any> {
        const data = await this._fieldUseCase.getField();
        console.log('Controller: ', data);
        //console.log('Prueba: ', data.description);
        return data;
    }

}