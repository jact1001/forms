import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {UserFormsRepository} from "../../infraestructure/repository/user-forms-repository/user-forms-repository";
import {IFormCase, IUserForm, IUserForms} from "../domain/user-forms";
import {IUseCase} from "../domain/use-case";
import {IForm} from "../domain/form";
import {UsersUseCase} from "../use-cases/users-use-case";
import {UseCaseUseCase} from "../use-cases/use-case-use-case";
import {FormsRepository} from "../../infraestructure/repository/forms-repository/forms-repository";

@Injectable()
@Scope('request')
export class UserFormsService implements OnDestroy {

    constructor(
        private readonly userFormsRepository: UserFormsRepository,
        private readonly formsRepository: FormsRepository,
        private readonly usersUseCase: UsersUseCase,
        private readonly useCaseUseCase: UseCaseUseCase
    ) {}

    private async setIsAuthorToForm(userForms: IUserForms, userSession: string) {
        const userFormsUpdated: IUserForms = {
            user_id: userForms.user_id,
            forms: userForms.forms.map((form: IUserForm) => {
                if (form.form_author === userSession){
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
        } else {return userForms}
    }

    public async saveUserForm(form: IForm, userId: string, useCases: IUseCase[]): Promise<IUserForms> {
        const formCases: IFormCase[] = useCases.map((useCase) => {
            return {
                case_id: useCase.id,
                state: useCase.case_state,
                name: useCase.case_name
            }
        });
        const newUserForm: IUserForm = {
            form_id: form.id,
            form_name: form.form_name,
            cases: formCases,
            form_author: form.author
        }
        return await this.userFormsRepository.saveUserForm(form, userId, newUserForm);
    }

    private async saveUseCase(formCase: IFormCase, form: IForm): Promise<IUseCase>{
        const useCase: IUseCase = {
            case_name: formCase.name,
            form_id: form.id,
            form_name: form.form_name,
            case_state: { id: 'pending', name: 'Pendiente'},
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
            const users = await this.usersUseCase.getUsers(excludedUserId);
            return users.map((user) => user.email);
        } else {
            return Array.from(uniqueUserIds);
        }
    }

    public async createCase(formCase: IFormCase, formId: string, email: string): Promise<IUserForms> {
        const form: IForm = await this.formsRepository.findForm(formId);
        const newUseCase = await this.saveUseCase(formCase, form);
        const newFormCase = {...formCase, case_id: newUseCase.id};
        const userIds = await this.getFormUserIds(form, email);
        await this.saveUseCaseToOtherUsers(newFormCase, userIds, formId);
        const userForms = await this.userFormsRepository.addUseCase(newFormCase, formId, email);
        return await this.setIsAuthorToForm(userForms, email);
    }

    public async exportUseCasesByFormId(formId: string, email: string) {
        const userForms = await this.userFormsRepository.findUserForms(email);
        if (userForms.forms.find((form) => form.form_id === formId)){
            const useCases = await this.useCaseUseCase.getUseCasesByFormId(formId);
            return useCases;
        }
    }

    public async updateFormUseCase(formCase: IFormCase, formId: string, email: string) {
        return await this.userFormsRepository.updateUseCase(formCase, formId, email);
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
