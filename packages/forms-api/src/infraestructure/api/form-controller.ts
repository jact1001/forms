import {Controller, Get} from "@tsed/common";
import {FormUseCase} from "../../core/use-cases/form-use-case";

@Controller("/form")
export class ItemController {

    public constructor(private readonly _formUseCase: FormUseCase) {
    }

    @Get("/")
    async getForm(): Promise<any> {
        return await this._formUseCase.getForm();
    }

}
