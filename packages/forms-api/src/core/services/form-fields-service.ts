import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FormFieldsRepository} from "../../infraestructure/repository/form-fields-repository";

@Injectable()
@Scope('request')
export class FormFieldsService implements OnDestroy {

    constructor(private readonly fieldRepository: FormFieldsRepository) {}

    public async getFormFields(): Promise<any> {
        const data = await this.fieldRepository.findFormFields();
        return data;
    }

    $onDestroy() {
        console.log('Field service destroyed');
    }

}
