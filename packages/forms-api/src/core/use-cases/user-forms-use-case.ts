import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {IUserFormsApiPort} from "../ports/user-forms-ports/user-forms-port";
import {IFormCase, IUserForms} from "../domain/user-forms";
import {UserFormsService} from "../services/user-forms-service";
import {IForm} from "../domain/form";
import {IUseCase} from "../domain/use-case";

@Injectable()
@Scope('request')
export class UserFormsUseCase implements IUserFormsApiPort, OnDestroy {

    constructor(private readonly userFormService: UserFormsService) {}

    public async getUserForms(email: string): Promise<IUserForms> {
        return this.userFormService.getUserForms(email);
    }

    public async saveUserForm(form: IForm, userId: string, useCases: IUseCase[]): Promise<IUserForms> {
        return this.userFormService.saveUserForm(form, userId, useCases);
    }

    public async createDefaultUserForms(email: string): Promise<string> {
        return this.userFormService.createDefaultUserForms(email);
    }

    public async createCase(userForm: IFormCase, formId: string, email: string): Promise<IUserForms> {
        return this.userFormService.createCase(userForm, formId, email);
    }

    public async updateUseCase(userForm: IFormCase, formId: string, email: string): Promise<IUserForms> {
        return this.userFormService.updateFormUseCase(userForm, formId, email);
    }

    public async exportUseCasesByFormId(formId: string, email: string): Promise<any> {
        return this.userFormService.exportUseCasesByFormId(formId, email);
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
