import {OnDestroy} from "@tsed/common";
import {IFormCase, IUserForm, IUserForms} from "../../domain/user-forms";
import {IUseCase} from "../../domain/use-case";
import {IForm} from "../../domain/form";
import {IUserFormsService} from "../i-user-forms-service";
import {IUserFormsRepositoryPort} from "../../ports/user-forms-ports/user-forms-repository-port";
import {IUseCasePort} from "../../ports/use-case-ports/use-case-port";
import {IFormApiPort} from "../../ports/forms-ports/forms-api-port";
import {IUserApiPort} from "../../ports/users-ports/users-api-port";
import {IFormRepositoryPort} from "../../ports/forms-ports/forms-repository-port";
import {IUserRepositoryPort} from "../../ports/users-ports/users-repository-port";
import {IUseCaseRepositoryPort} from "../../ports/use-case-ports/use-case-repository-port";

export class UserFormsService implements IUserFormsService, OnDestroy {

    constructor(
        private readonly userFormsRepository: IUserFormsRepositoryPort,
        private readonly formRepository: IFormRepositoryPort,
        private readonly userRepository: IUserRepositoryPort,
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

    private async saveUseCase(formCase: IFormCase, form: IForm, email: string): Promise<IUseCase> {
        const useCase: IUseCase = {
            case_name: formCase.name,
            case_creator: email,
            form_id: form.id,
            form_name: form.form_name,
            case_state: {id: 'pending', name: 'Pendiente'},
            sections: form.sections
        }
        return await this.useCaseRepository.saveUseCase(useCase);
    }

    private async saveUseCaseToOtherUsers(formCase: IFormCase, userIds: string[], formId: string) {
        for (const userId of userIds) {
            await this.userFormsRepository.addUseCase(formCase, formId, userId);
        }
    }

    private async getFormUserIds(form: IForm, excludedUserId) {
        const uniqueUserIds = new Set<string>();
        let hasAll = false;

        for (const section of form.sections) {
            for (const user of section.access) {
                if (user.userId === 'all') {
                    hasAll = true;
                } else if (user.userId !== excludedUserId) {
                    uniqueUserIds.add(user.userId);
                }
            }
        }

        if (hasAll) {
            const users = await this.userRepository.findUsers(excludedUserId);
            return users.filter((user) => {
                return user.email !== 'all';
            }).map((user) => user.email);
        } else {
            return Array.from(uniqueUserIds);
        }
    }

    public async createCase(formCase: IFormCase, formId: string, email: string): Promise<IUserForms> {
        const form: IForm = await this.formRepository.findForm(formId);
        const newUseCase = await this.saveUseCase(formCase, form, email);
        const newFormCase = {...formCase, case_id: newUseCase.id};
        const userIds = await this.getFormUserIds(form, email);
        await this.saveUseCaseToOtherUsers(newFormCase, userIds, formId);
        const userForms = await this.userFormsRepository.addUseCase(newFormCase, formId, email);
        return await this.setIsAuthorToForm(userForms, email);
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
