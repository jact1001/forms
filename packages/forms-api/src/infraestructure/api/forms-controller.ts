import {BodyParams, Controller, Get, PathParams, Post} from "@tsed/common";
import { FormsUseCase } from "../../core/use-cases/forms-use-case";
import { IForm } from "../../core/domain/form";

@Controller("/forms")
export class FormsController {

    public constructor(private readonly _formsUseCase: FormsUseCase) {}

    @Get("/")
    async getForms(): Promise<IForm[]> {
        return await this._formsUseCase.getForms();
    }

    @Get("/:formId")
    async getFormById(@PathParams('formId') formId: string): Promise<IForm> {
        return await this._formsUseCase.getFormById(formId);
    }

    @Post("/")
    async saveForm(@BodyParams() data: IForm): Promise<IForm> {
        return await this._formsUseCase.saveForm(data);
    }

}
