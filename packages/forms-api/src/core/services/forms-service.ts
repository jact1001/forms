import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { FormsRepository } from "../../infraestructure/repository/forms-repository/forms-repository";
import { IForm } from "../domain/form";

@Injectable()
@Scope('request')
export class FormsService implements OnDestroy {

    constructor(private readonly formRepository: FormsRepository) {}

    public async getForms(): Promise<IForm[]> {
        const data = await this.formRepository.findForms();
        return data;
    }

    public async getFormById(formId: string): Promise<IForm> {
        const data = await this.formRepository.findForm(formId);
        return data;
    }

    public async saveForm(form: IForm): Promise<IForm> {
        const data = await this.formRepository.saveForm(form);
        return data;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
