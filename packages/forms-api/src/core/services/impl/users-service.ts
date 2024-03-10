import {OnDestroy} from "@tsed/common";
import {IUser} from "../../domain/user";
import {IUsersService} from "../i-users-service";
import {IUserRepositoryPort} from "../../ports/users-ports/users-repository-port";
import {IUserFormsApiPort} from "../../ports/user-forms-ports/user-forms-port";
import {IForm} from "../../domain/form";
import {IFormCase, IUserForm, IUserForms} from "../../domain/user-forms";
import {IUserFormsRepositoryPort} from "../../ports/user-forms-ports/user-forms-repository-port";
import {IUseCaseRepositoryPort} from "../../ports/use-case-ports/use-case-repository-port";
import {IFormRepositoryPort} from "../../ports/forms-ports/forms-repository-port";

export class UsersService implements IUsersService, OnDestroy {

    constructor(
        private readonly userRepository: IUserRepositoryPort,
        private readonly userFormsRepository: IUserFormsRepositoryPort,
        private readonly useCaseRepository: IUseCaseRepositoryPort,
        private readonly formRepository: IFormRepositoryPort,
    ) {
    }

    public async getUsers(email: string): Promise<IUser[]> {
        return await this.userRepository.findUsers(email);
    }

    public async getUserByEmail(email: string): Promise<IUser> {
        return await this.userRepository.findUserByEmail(email);
    }

    private async getFormCases(formId: string): Promise<IFormCase[]> {
        const useCases = await this.useCaseRepository.findUseCasesByFormId(formId);
        return useCases.map((useCase) => ({
            case_id: useCase.id,
            state: useCase.case_state,
            name: useCase.case_name,
            case_creator: useCase.case_creator
        }));
    }

    private async getFormsWithAllAccess() {
        const allForms = await this.formRepository.findForms();
        return allForms.filter((form) => {
            return form.sections.some((section) => {
                return section.access.some((acc) => acc.userId === 'all');
            });
        });
    }

    private filterFormsForUser(allForms: IForm[], userForms: IUserForms): IForm[] {
        return allForms.filter((form) => {
            return !userForms.forms.some((userForm) => form.id === userForm.form_id);
        });
    }

    private buildUserForm(form: IForm, formCases: IFormCase[]): IUserForm {
        return {
            form_id: form.id,
            form_name: form.form_name,
            cases: formCases,
            form_author: form.author
        };
    }

    private async createDefaultUserForms(email: string) {
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

    public async saveUser(user: IUser): Promise<IUser> {
        const userExist: IUser = await this.userRepository.findUserByEmail(user.email);
        let newUser: IUser;

        if (!userExist) {
            newUser = await this.userRepository.saveUser(user);
        } else {
            newUser = userExist;
        }

        await this.createDefaultUserForms(user.email);
        return newUser;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
