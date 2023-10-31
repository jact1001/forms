import {Injectable, OnDestroy, Scope} from "@tsed/common";
import { FormsService } from "../services/forms-service";
import { IFormApiPort } from "../ports/forms-ports/forms-api-port";
import { IForm } from "../domain/form";

@Injectable()
@Scope('request')
export class FormsUseCase implements IFormApiPort, OnDestroy {

    constructor(private readonly formsService: FormsService) {}

    public async getForms(): Promise<IForm[]> {
        return this.formsService.getForms();
    }

    public async getFormById(formId: string): Promise<IForm> {
        return this.formsService.getFormById(formId);
    }

    public async saveForm(form: IForm, email: string): Promise<IForm> {
        return this.formsService.saveForm(form, email);
    }

    public async updateForm(form: IForm, email: string): Promise<IForm> {
        return this.formsService.updateForm(form, email);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
