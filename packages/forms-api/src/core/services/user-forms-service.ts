import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { UserFormsRepository } from "../../infraestructure/repository/user-forms-repository/user-forms-repository";
import { IFormCase, IUserForms } from "../domain/user-forms";
import { IUseCase } from "../domain/use-case";
import { IForm } from "../domain/form";
import { UsersUseCase } from "../use-cases/users-use-case";
import { UseCaseUseCase } from "../use-cases/use-case-use-case";
import { FormsRepository } from "../../infraestructure/repository/forms-repository/forms-repository";

@Injectable()
@Scope('request')
export class UserFormsService implements OnDestroy {

    constructor(
        private readonly userFormsRepository: UserFormsRepository,
        private readonly formsRepository: FormsRepository,
        private readonly usersUseCase: UsersUseCase,
        private readonly useCaseUseCase: UseCaseUseCase
    ) {}

    public async getUserForms(email: string): Promise<IUserForms> {
        return await this.userFormsRepository.findUserForms(email);
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
        return await this.userFormsRepository.addUseCase(newFormCase, formId, email);
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
