import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { FormFieldsService } from "../services/form-fields-service";
import { IFormFieldsApiPort } from "../ports/form-fields-ports/form-fields-api-port";
import { IFormFields } from "../domain/form-fields";

@Injectable()
@Scope('request')
export class FormFieldsUseCase implements IFormFieldsApiPort, OnDestroy {

    constructor(private readonly fieldService: FormFieldsService) {}

    public async getFormFields(): Promise<IFormFields> {
        return this.fieldService.getFormFields();
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
