import { BodyParams, Controller, Get, Post } from "@tsed/common";
import { FormsUseCase } from "../../core/use-cases/forms-use-case";

@Controller("/forms")
export class ItemController {

    public constructor(private readonly _formsUseCase: FormsUseCase) {}

    @Get("/")
    async getForms(): Promise<any> {
        return await this._formsUseCase.getForms();
    }

    @Post("/")
    async saveForm(@BodyParams() data: any) {
        return await this._formsUseCase.saveForm(data);
    }

}
