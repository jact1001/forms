import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { UsersRepository } from "../../infraestructure/repository/users-repository/users-repository";
import { IUser } from "../domain/user";
import { UserFormsRepository } from "../../infraestructure/repository/user-forms-repository/user-forms-repository";
import { IFormCase, IUserForms } from "../domain/user-forms";
import {UseCaseRepository} from "../../infraestructure/repository/use-case-repository/use-case-repository";
import {IUseCase} from "../domain/use-case";

@Injectable()
@Scope('request')
export class UserFormsService implements OnDestroy {

    constructor(
        private readonly userFormsRepository: UserFormsRepository,
        private readonly userRepository: UsersRepository,
        private readonly useCaseRepository: UseCaseRepository
    ) {}

    public async getUserForms(email: string): Promise<IUserForms> {
        const user: IUser = await this.userRepository.findUserByEmail(email);
        return await this.userFormsRepository.findUserForms(user._id);
    }

    public async saveUserForms(userForm: IUserForms): Promise<IUserForms> {
        return await this.userFormsRepository.saveUserForms(userForm);
    }

    public async createCase(formCase: IFormCase, formId: string, email: string): Promise<IUserForms> {
        const useCase: IUseCase = {
            case_name: formCase.name,
            form_id: formId,
            case_state: { id: 'pending', name: 'Pendiente'}
        }
        const newUseCase = await this.useCaseRepository.saveUseCase(useCase);
        const newFormCase = {...formCase, case_id: newUseCase.id}
        return await this.userFormsRepository.addUseCase(newFormCase, formId, email);
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
