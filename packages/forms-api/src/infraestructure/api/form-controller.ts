import {BodyParams, Controller, Get, Post, Res} from "@tsed/common";
import {FormUseCase} from "../../core/use-cases/form-use-case";

@Controller("/form")
export class ItemController {

    public constructor(private readonly _formUseCase: FormUseCase) {
    }

    @Get("/")
    async getForm(): Promise<any> {
        return await this._formUseCase.getForm();
    }

    @Post("/")
    async saveForm(@BodyParams() data: any) {
        console.log('datos en el backend', data);
        await this._formUseCase.saveForm(data);
        return "Solicitud POST exitosa"; // Puedes devolver una respuesta exitosa
    }

}
