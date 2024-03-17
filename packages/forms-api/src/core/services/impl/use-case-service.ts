import {OnDestroy} from "@tsed/common";
import {IUseCase} from "../../domain/use-case";
import {IForm} from "../../domain/form";
import {IFormCase, IUserForms} from "../../domain/user-forms";
import {IUseCaseService} from "../i-use-case-service";
import {IUseCaseRepositoryPort} from "../../ports/use-case-ports/use-case-repository-port";
import {IUserFormsRepositoryPort} from "../../ports/user-forms-ports/user-forms-repository-port";
import {IFormRepositoryPort} from "../../ports/forms-ports/forms-repository-port";
import {IUserRepositoryPort} from "../../ports/users-ports/users-repository-port";

export class UseCaseService implements IUseCaseService, OnDestroy {

    constructor(
        private readonly useCaseRepository: IUseCaseRepositoryPort,
        private readonly userFormsRepository: IUserFormsRepositoryPort,
        private readonly formRepository: IFormRepositoryPort,
        private readonly userRepository: IUserRepositoryPort,
    ) {
    }

    public async saveUseCase(useCase: IUseCase): Promise<IUseCase> {
        const result = await this.useCaseRepository.saveUseCase(useCase);
        return result;
    }

    private async buildAndSaveUseCase(formCase: IUseCase, form: IForm, email: string): Promise<IUseCase> {
        const useCase: IUseCase = {
            case_name: formCase.case_name,
            case_creator: email,
            form_id: form.id,
            form_name: form.form_name,
            case_state: {id: 'pending', name: 'Pendiente'},
            sections: form.sections
        }
        return await this.useCaseRepository.saveUseCase(useCase);
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

    private async saveUseCaseToOtherUsers(formCase: IFormCase, userIds: string[], formId: string) {
        for (const userId of userIds) {
            await this.userFormsRepository.addUseCase(formCase, formId, userId);
        }
    }

    public async createCase(data: IUseCase, email: string): Promise<IUseCase> {
        const formId = data.form_id;
        const form: IForm = await this.formRepository.findForm(formId);
        const newUseCase = await this.buildAndSaveUseCase(data, form, email);
        const newFormCase = {
            state: newUseCase.case_state,
            name: newUseCase.case_name,
            case_id: newUseCase.id,
            case_creator: newUseCase.case_creator
        };
        const userIds = await this.getFormUserIds(form, email);
        await this.saveUseCaseToOtherUsers(newFormCase, userIds, formId);
        await this.userFormsRepository.addUseCase(newFormCase, formId, email);
        return newUseCase;
    }

    public async updateUseCase(useCase: IUseCase, email: string): Promise<IUseCase> {
        const formsUseCase: IFormCase = {
            case_id: useCase.id,
            name: useCase.case_name,
            state: useCase.case_state,
            case_creator: useCase.case_creator
        }
        await this.userFormsRepository.updateUseCase(formsUseCase, useCase.form_id, email);
        return await this.useCaseRepository.updateUseCase(useCase);
    }

    public async getUseCaseByUseCaseId(caseId: string, email: string): Promise<IUseCase> {
        let useCase = await this.useCaseRepository.findUseCase(caseId, email);
        return {
            id: useCase.id,
            case_name: useCase.case_name,
            case_creator: useCase.case_creator ?? '',
            case_state: useCase.case_state,
            form_id: useCase.form_id,
            form_name: useCase.form_name,
            sections: useCase.sections.filter((section) => {
                if (section.access.find((access) => (access.userId === 'all' || access.userId === email))) return section;
            })
        }
    }

    public async getUseCasesByFormId(formId: string): Promise<IUseCase[]> {
        return await this.useCaseRepository.findUseCasesByFormId(formId);
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
