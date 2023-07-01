import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FormsService} from "../services/forms-service";
import {IFormRepositoryPort} from "../ports/forms-repository-port";

@Injectable()
@Scope('request')
export class FormsUseCase implements IFormRepositoryPort, OnDestroy {

    constructor(private readonly formsService: FormsService) {
    }

    public async getForms(): Promise<any> {
        return this.formsService.getForms();
    }

    public async saveForm(form): Promise<any> {
        return this.formsService.saveForm(form);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
