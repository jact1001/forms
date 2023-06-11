import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FormService} from "../services/form-service";
import {IFormRepositoryPort} from "../ports/form-repository-port";

@Injectable()
@Scope('request')
export class FormUseCase implements IFormRepositoryPort, OnDestroy {

    constructor(private readonly formService: FormService) {
    }

    public async getForm(): Promise<any> {
        return this.formService.getForm();
    }

    public async saveForm(form): Promise<any> {
        return this.formService.saveForm(form);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
