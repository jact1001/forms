import { BodyParams, Controller, Get, Post } from "@tsed/common";
import { FormsUseCase } from "../../core/use-cases/forms-use-case";
import { IForm } from "../../core/domain/form";

@Controller("/forms")
export class ItemController {

    public constructor(private readonly _formsUseCase: FormsUseCase) {}

    @Get("/")
    async getForms(): Promise<IForm[]> {
        return await this._formsUseCase.getForms();
    }

    @Post("/")
    async saveForm(@BodyParams() data: IForm): Promise<IForm> {
        return await this._formsUseCase.saveForm(data);
    }

}
