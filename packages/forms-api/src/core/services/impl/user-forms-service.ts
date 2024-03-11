import {OnDestroy} from "@tsed/common";
import {IFormCase, IUserForm, IUserForms} from "../../domain/user-forms";
import {IUserFormsService} from "../i-user-forms-service";
import {IUserFormsRepositoryPort} from "../../ports/user-forms-ports/user-forms-repository-port";
import {IUseCaseRepositoryPort} from "../../ports/use-case-ports/use-case-repository-port";

export class UserFormsService implements IUserFormsService, OnDestroy {

    constructor(
        private readonly userFormsRepository: IUserFormsRepositoryPort,
        private readonly useCaseRepository: IUseCaseRepositoryPort
    ) {
    }

    private async setIsAuthorToForm(userForms: IUserForms, userSession: string) {
        const userFormsUpdated: IUserForms = {
            user_id: userForms.user_id,
            forms: userForms.forms.map((form: IUserForm) => {
                if (form.form_author === userSession) {
                    return {
                        form_id: form.form_id,
                        form_name: form.form_name,
                        form_author: form.form_author,
                        cases: form.cases,
                        is_author: true
                    }
                }
                return form;
            }),
        }
        return userFormsUpdated;
    }

    public async getUserForms(email: string): Promise<IUserForms> {
        const userForms = await this.userFormsRepository.findUserForms(email);
        if (userForms) {
            return await this.setIsAuthorToForm(userForms, email);
        } else {
            return userForms
        }
    }

    public async exportUseCasesByFormId(formId: string, email: string) {
        const userForms = await this.userFormsRepository.findUserForms(email);
        if (userForms.forms.find((form) => form.form_id === formId)) {
            return await this.useCaseRepository.findUseCasesByFormId(formId);
        }
    }

    public async updateFormUseCase(formCase: IFormCase, formId: string, email: string) {
        return await this.userFormsRepository.updateUseCase(formCase, formId, email);
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
