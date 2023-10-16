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
                await this.userFormsUseCase.saveUserForms(form, access.userId);
            }
        }
    }

    private async saveAdminUserForm(form: IForm, userId: string) {
        await this.userFormsUseCase.saveUserForms(form, userId);
    }

    private async createUserForms(form: IForm, email: string){
        const user: IUser = await this.usersUseCase.getUserByEmail(email);
        await this.saveAdminUserForm(form, user.email);
        await this.saveSectionsUsers(form);
    }

    public async saveForm(form: IForm, email: string): Promise<IForm> {
        const newForm = await this.formRepository.saveForm(form);
        await this.createUserForms(newForm, email);
        return newForm;
    }

    public async updateForm(form: IForm, email): Promise<IForm> {
        const newForm = await this.formRepository.updateForm(form);
        await this.createUserForms(newForm, email);
        return newForm;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
