import {OnDestroy} from "@tsed/common";
import {IFormFieldsApiPort} from "../ports/form-fields-ports/form-fields-api-port";
import {IFormFields} from "../domain/form-fields";
import {IFormFieldsService} from "../services/i-form-fields-service";

export class FormFieldsUseCase implements IFormFieldsApiPort, OnDestroy {

    constructor(private readonly fieldService: IFormFieldsService) {
    }

    public async getFormFields(): Promise<IFormFields> {
        return this.fieldService.getFormFields();
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
