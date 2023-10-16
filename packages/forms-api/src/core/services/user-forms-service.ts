import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { UsersRepository } from "../../infraestructure/repository/users-repository/users-repository";
import { IUser } from "../domain/user";
import { UserFormsRepository } from "../../infraestructure/repository/user-forms-repository/user-forms-repository";
import { IFormCase, IUserForms } from "../domain/user-forms";
import { IUseCase } from "../domain/use-case";
import { IForm } from "../domain/form";
import { UseCaseService } from "./use-case-service";

@Injectable()
@Scope('request')
export class UserFormsService implements OnDestroy {

    constructor(
        private readonly userFormsRepository: UserFormsRepository,
        private readonly userRepository: UsersRepository,
        private readonly useCaseService: UseCaseService
    ) {}

    public async getUserForms(email: string): Promise<IUserForms> {
        const user: IUser = await this.userRepository.findUserByEmail(email);
        return await this.userFormsRepository.findUserForms(user._id);
    }

    public async saveUserForms(form: IForm, userId: string): Promise<IUserForms> {
        return await this.userFormsRepository.saveUserForms(form, userId);
    }

    private async saveUseCase(formCase: IFormCase, formId: string): Promise<IUseCase>{
        const useCase: IUseCase = {
            case_name: formCase.name,
            form_id: formId,
            case_state: { id: 'pending', name: 'Pendiente'}
        }
        return await this.useCaseService.saveUseCase(useCase);
    }

    public async createCase(formCase: IFormCase, formId: string, email: string): Promise<IUserForms> {
        const newUseCase = await this.saveUseCase(formCase, formId);
        const newFormCase = {...formCase, case_id: newUseCase.id};
        return await this.userFormsRepository.addUseCase(newFormCase, formId, email);
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
