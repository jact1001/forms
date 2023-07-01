import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FormFieldsRepository} from "../../infraestructure/repository/form-fields-repository";

@Injectable()
@Scope('request')
export class FieldService implements OnDestroy {

    constructor(private readonly fieldRepository: FormFieldsRepository) {}

    public async getField(): Promise<any> {
        const data = await this.fieldRepository.findField();
        return data;
    }

    $onDestroy() {
        console.log('Field service destroyed');
    }

}
