import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {UserFormsRepository} from "../../infraestructure/repository/user-forms-repository/user-forms-repository";
import {IFormCase, IUserForm, IUserForms} from "../domain/user-forms";
import {IUseCase} from "../domain/use-case";
import {IForm, ISection} from "../domain/form";
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

    public async saveUserForms(form: IForm, userId: string, useCases: IUseCase[]): Promise<IUserForms> {
        const formCases: IFormCase[] = useCases.map((useCase) => {
            return {
                case_id: useCase.id,
                state: useCase.case_state,
                name: useCase.case_name
            }
        })
        return await this.userFormsRepository.saveUserForms(form, userId, formCases);
    }

    private async saveUseCase(formCase: IFormCase, formId: string): Promise<IUseCase>{
        const form: IForm = await this.formsRepository.findForm(formId);
        const useCase: IUseCase = {
            case_name: formCase.name,
            form_id: formId,
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

    public async createCase(formCase: IFormCase, formId: string, email: string): Promise<IUserForms> {
        const newUseCase = await this.saveUseCase(formCase, formId);
        const newFormCase = {...formCase, case_id: newUseCase.id};
        const userIds = await this.userFormsRepository.findUsersByFormId(formId, email);
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
