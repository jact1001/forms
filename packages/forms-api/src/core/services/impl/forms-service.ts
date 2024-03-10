import { OnDestroy} from "@tsed/common";
import {IAccess, IForm, ISection} from "../../domain/form";
import {IUseCase} from "../../domain/use-case";
import {IFormsService} from "../i-forms-service";
import {IFormRepositoryPort} from "../../ports/forms-ports/forms-repository-port";
import {IUseCasePort} from "../../ports/use-case-ports/use-case-port";
import {IUserApiPort} from "../../ports/users-ports/users-api-port";
import {IUserFormsApiPort} from "../../ports/user-forms-ports/user-forms-port";
import {IUserRepositoryPort} from "../../ports/users-ports/users-repository-port";
import {IFormCase, IUserForm, IUserForms} from "../../domain/user-forms";
import {IUserFormsRepositoryPort} from "../../ports/user-forms-ports/user-forms-repository-port";
import {IUseCaseRepositoryPort} from "../../ports/use-case-ports/use-case-repository-port";

export class FormsService implements IFormsService, OnDestroy {

    constructor(
        private readonly formRepository: IFormRepositoryPort,
        private readonly userRepository: IUserRepositoryPort,
        private readonly userFormsRepository: IUserFormsRepositoryPort,
        private readonly useCaseRepository: IUseCaseRepositoryPort,
    ) {
    }

    public async getForms(): Promise<IForm[]> {
        return await this.formRepository.findForms();
    }

    public async getFormById(formId: string): Promise<IForm> {
        return await this.formRepository.findForm(formId);
    }

    private async getFormUserIds(form: IForm) {
        const uniqueUserIds = new Set<string>();
        let hasAll = false;

        for (const section of form.sections) {
            for (const user of section.access) {
                if (user.userId === 'all') {
                    hasAll = true;
                } else {
                    uniqueUserIds.add(user.userId);
                }
            }
        }

        if (hasAll) {
            const users = await this.userRepository.findUsers('all');
            return users.map((user) => user.email);
        } else {
            return Array.from(uniqueUserIds);
        }
    }

    private async saveUserForm(form: IForm, userId: string, useCases: IUseCase[]): Promise<IUserForms> {
        const formCases: IFormCase[] = useCases.map((useCase) => {
            return {
                case_id: useCase.id,
                state: useCase.case_state,
                name: useCase.case_name,
                case_creator: useCase.case_creator
            }
        });
        const newUserForm: IUserForm = {
            form_id: form.id,
            form_name: form.form_name,
            cases: formCases,
            form_author: form.author
        }
        return await this.userFormsRepository.saveUserForm(userId, newUserForm);
    }

    private async createUserForms(form: IForm, useCases: IUseCase[]) {
        const userIds = await this.getFormUserIds(form);
        for (const userId of userIds) {
            await this.saveUserForm(form, userId, useCases);
        }
    }

    private async setAccessSectionsToAuthor(form: IForm, author: string) {
        const user = await this.userRepository.findUserByEmail(author);
        const newAccess: IAccess = {
            userId: author,
            userName: `${user.user_name}`,
            permission: ['write']
        }
        return {
            ...form,
            sections: form.sections.map((section: ISection) => {
                return {
                    ...section,
                    access: section.access.find((access) => access.userId === author) ? section.access : section.access.concat(newAccess)
                }
            })
        }
    }

    public async saveForm(form: IForm, email: string): Promise<IForm> {
        const formUpdated = await this.setAccessSectionsToAuthor(form, email);
        const newForm = await this.formRepository.saveForm({author: email, ...formUpdated});
        await this.createUserForms(newForm, []);
        return newForm;
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

    public async updateFormUseCases(form: IForm, email: string): Promise<IUseCase[]> {
        const useCases = await this.useCaseRepository.findUseCasesByFormId(form.id);
        const updatedUseCases: IUseCase[] = [];
        for (const useCase of useCases) {
            let newSections: ISection[] = [...form.sections];
            const updatedSections = useCase.sections.map((useCaseSection) => {
                const matchingSectionPosition = newSections.findIndex((section, index) => useCaseSection.id.toString() === section.id.toString());
                if (matchingSectionPosition !== -1) {
                    const matchingSection = newSections[matchingSectionPosition];
                    newSections.splice(matchingSectionPosition, 1);
                    return {
                        id: useCaseSection.id,
                        sectionName: matchingSection.sectionName,
                        access: matchingSection.access,
                        fields: [
                            ...useCaseSection.fields.map(field => {
                                const matchingField = matchingSection.fields.find(f => f.form_field_id === field.form_field_id);
                                return matchingField && !field.value ? matchingField : field.value ? field : undefined;
                            }).filter(field => field !== undefined),
                            ...matchingSection.fields.filter(field => !useCaseSection.fields.some(f => f.form_field_id === field.form_field_id))
                        ]
                    };
                } else {
                    return useCaseSection;
                }
            });

            const updatedUseCase: IUseCase = {
                id: useCase.id,
                case_name: useCase.case_name,
                case_creator: useCase.case_creator ?? '',
                case_state: useCase.case_state,
                form_id: useCase.form_id,
                form_name: useCase.form_name,
                sections: [...updatedSections, ...newSections]
            };

            try {
                const newUseCase = await this.updateUseCase(updatedUseCase, email);
                updatedUseCases.push(newUseCase);
            } catch (error) {
                console.error(`Error updating use case: ${error.message}`);
            }
        }
        return updatedUseCases;
    }

    public async updateForm(form: IForm, email): Promise<IForm> {
        const formUpdated = await this.setAccessSectionsToAuthor(form, email);
        const newForm = await this.formRepository.updateForm(formUpdated);
        const useCases = await this.updateFormUseCases(newForm, email);
        await this.createUserForms(newForm, useCases);
        return newForm;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
