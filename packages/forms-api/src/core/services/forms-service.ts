import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { FormsRepository } from "../../infraestructure/repository/forms-repository/forms-repository";
import { IForm } from "../domain/form";
import {UserFormsRepository} from "../../infraestructure/repository/user-forms/user-forms-repository";
import {UsersRepository} from "../../infraestructure/repository/users-repository/users-repository";
import {IUser} from "../domain/user";
import {IUserForm, IUserForms} from "../domain/user-forms";

@Injectable()
@Scope('request')
export class FormsService implements OnDestroy {

    constructor(
        private readonly formRepository: FormsRepository,
        private readonly userFormsRepository: UserFormsRepository,
        private readonly userRepository: UsersRepository
    ) {}

    public async getForms(): Promise<IForm[]> {
        const data = await this.formRepository.findForms();
        return data;
    }

    public async getFormById(formId: string): Promise<IForm> {
        const data = await this.formRepository.findForm(formId);
        return data;
    }

    public async saveForm(form: IForm, email: string): Promise<IForm> {
        const user: IUser = await this.userRepository.findUserByEmail(email);
        const userForms: IUserForms = await this.userFormsRepository.findUserForms(user._id);
        const newForm = await this.formRepository.saveForm(form);
        const newUserForm: IUserForm = {
            form_id: newForm.id,
            form_name: newForm.form_name
        };
        await this.userFormsRepository.saveUserForms({
            user_id: user._id,
            forms: userForms ? [...userForms.forms, newUserForm] : [newUserForm]
        });

        return newForm;
    }

    public async updateForm(form: IForm): Promise<IForm> {
        const data = await this.formRepository.updateForm(form);
        return data;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
