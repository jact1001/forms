import {OnDestroy} from "@tsed/common";
import {IFormCase, IUserForm, IUserForms} from "../../domain/user-forms";
import {IUseCase} from "../../domain/use-case";
import {IForm} from "../../domain/form";
import {IUserFormsService} from "../i-user-forms-service";
import {IUserFormsRepositoryPort} from "../../ports/user-forms-ports/user-forms-repository-port";
import {IUseCasePort} from "../../ports/use-case-ports/use-case-port";
import {IFormApiPort} from "../../ports/forms-ports/forms-api-port";
import {IUserApiPort} from "../../ports/users-ports/users-api-port";

export class UserFormsService implements IUserFormsService, OnDestroy {

    constructor(
        private readonly userFormsRepository: IUserFormsRepositoryPort,
        private readonly formUseCase: IFormApiPort,
        private readonly userUseCase: IUserApiPort,
        private readonly useCaseUseCase: IUseCasePort
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

    public async createDefaultUserForms(email: string) {
        try {
            const formsWithAll = await this.getFormsWithAllAccess();
            const userForms = await this.userFormsRepository.findUserForms(email);
            let formsToAdd: IForm[] = formsWithAll;
            if (userForms) {
                formsToAdd = this.filterFormsForUser(formsWithAll, userForms);
            }
            for (const form of formsToAdd) {
                const formCases = await this.getFormCases(form.id);
                const newUserForm = this.buildUserForm(form, formCases);
                await this.userFormsRepository.saveUserForm(email, newUserForm);
            }
            return 'ok';
        } catch (error) {
            console.error('Error al crear el formularios predeterminados para el usuario:', error);
            throw error;
        }
    }

    private filterFormsForUser(allForms: IForm[], userForms: IUserForms): IForm[] {
        return allForms.filter((form) => {
            return !userForms.forms.some((userForm) => form.id === userForm.form_id);
        });
    }

    private async getFormsWithAllAccess() {
        const allForms = await this.formUseCase.getForms();
        return allForms.filter((form) => {
            return form.sections.some((section) => {
                return section.access.some((acc) => acc.userId === 'all');
            });
        });
    }

    private async getFormCases(formId: string): Promise<IFormCase[]> {
        const useCases = await this.useCaseUseCase.getUseCasesByFormId(formId);
        return useCases.map((useCase) => ({
            case_id: useCase.id,
            state: useCase.case_state,
            name: useCase.case_name
        }));
    }

    private buildUserForm(form: IForm, formCases: IFormCase[]): IUserForm {
        return {
            form_id: form.id,
            form_name: form.form_name,
            cases: formCases,
            form_author: form.author
        };
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
        return await this.useCaseUseCase.saveUseCase(useCase);
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
            const users = await this.userUseCase.getUsers(excludedUserId);
            return users.filter((user) => {
                return user.email !== 'all';
            }).map((user) => user.email);
        } else {
            return Array.from(uniqueUserIds);
        }
    }

    public async createCase(formCase: IFormCase, formId: string, email: string): Promise<IUserForms> {
        const form: IForm = await this.formUseCase.getFormById(formId);
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
            return await this.useCaseUseCase.getUseCasesByFormId(formId);
        }
    }

    public async updateFormUseCase(formCase: IFormCase, formId: string, email: string) {
        return await this.userFormsRepository.updateUseCase(formCase, formId, email);
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
