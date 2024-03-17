import {OnDestroy} from "@tsed/common";
import {IFormFields} from "../../domain/form-fields";
import {IFormFieldsService} from "../i-form-fields-service";
import {IFormFieldsRepositoryPort} from "../../ports/form-fields-ports/form-fields-repository-port";

export class FormFieldsService implements IFormFieldsService, OnDestroy {

    constructor(private readonly fieldRepository: IFormFieldsRepositoryPort) {
    }

    public async getFormFields(): Promise<IFormFields> {
        const defaultListPosition = 0;
        const IFormFieldsList = await this.fieldRepository.findFormFields();
        return IFormFieldsList[defaultListPosition];
    }

    $onDestroy() {
        console.log('Field service destroyed');
    }

}
