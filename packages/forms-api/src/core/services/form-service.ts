import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FormRepository} from "../../infraestructure/repository/form-repository";

@Injectable()
@Scope('request')
export class FormService implements OnDestroy {

    constructor(private readonly formRepository: FormRepository) {}

    public async getForm(): Promise<any> {
        const data = await this.formRepository.findForm();
        return data;
    }

    public async saveForm(form): Promise<any> {
        const data = await this.formRepository.saveForm(form);
        return data;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
