import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FormsRepository} from "../../infraestructure/repository/forms-repository/forms-repository";
import {IForm} from "../domain/form";
import {IUser} from "../domain/user";
import {UsersUseCase} from "../use-cases/users-use-case";
import {UserFormsUseCase} from "../use-cases/user-forms-use-case";

@Injectable()
@Scope('request')
export class FormsService implements OnDestroy {

    constructor(
        private readonly formRepository: FormsRepository,
        private readonly usersUseCase: UsersUseCase,
        private readonly userFormsUseCase: UserFormsUseCase
    ) {}

    public async getForms(): Promise<IForm[]> {
        return await this.formRepository.findForms();
    }

    public async getFormById(formId: string): Promise<IForm> {
        return await this.formRepository.findForm(formId);
    }

    private async saveSectionsUsers(form: IForm) {
        const { sections } = form;
        for (const section of sections) {
            for (const access of section.access) {
                console.log('')
                await this.userFormsUseCase.saveUserForms(form, access.userId);
            }
        }
    }

    private async saveAdminUserForm(form: IForm, userId: string) {
        await this.userFormsUseCase.saveUserForms(form, userId);
    }

    public async saveForm(form: IForm, email: string): Promise<IForm> {
        const newForm = await this.formRepository.saveForm(form);
        const user: IUser = await this.usersUseCase.getUserByEmail(email);
        await this.saveAdminUserForm(newForm, user.email);
        await this.saveSectionsUsers(newForm);
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
