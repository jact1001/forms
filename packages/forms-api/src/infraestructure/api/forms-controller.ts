import {BodyParams, Controller, Get, Post, Res} from "@tsed/common";
import {FormUseCase} from "../../core/use-cases/form-use-case";

@Controller("/forms")
export class ItemController {

    public constructor(private readonly _formUseCase: FormUseCase) {}

    @Get("/")
    async getForms(): Promise<any> {
        return await this._formUseCase.getForm();
    }

    @Post("/")
    async saveForm(@BodyParams() data: any) {
        return await this._formUseCase.saveForm(data);
    }

}
