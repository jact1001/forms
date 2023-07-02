import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FormFieldsRepository} from "../../infraestructure/repository/form-fields-repository/form-fields-repository";
import {IFormFields} from "../domain/form-fields";

@Injectable()
@Scope('request')
export class FormFieldsService implements OnDestroy {

    constructor(private readonly fieldRepository: FormFieldsRepository) {}

    public async getFormFields(): Promise<IFormFields> {
        const defaultListPosition = 0;
        const IFormFieldsList = await this.fieldRepository.findFormFields();
        return IFormFieldsList[defaultListPosition];
    }

    $onDestroy() {
        console.log('Field service destroyed');
    }

}
