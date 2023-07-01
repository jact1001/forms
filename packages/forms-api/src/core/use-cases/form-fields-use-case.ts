import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { FormFieldsService } from "../services/form-fields-service";
import { IFormFieldsRepositoryPort } from "../ports/form-fields-repository-port";

@Injectable()
@Scope('request')
export class FormFieldsUseCase implements IFormFieldsRepositoryPort, OnDestroy {

    constructor(private readonly fieldService: FormFieldsService) {}

    public async getFormFields(): Promise<any> {
        return this.fieldService.getFormFields();
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
