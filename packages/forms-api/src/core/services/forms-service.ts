import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FormsRepository} from "../../infraestructure/repository/forms-repository/forms-repository";
import {IAccess, IForm, ISection} from "../domain/form";
import {UsersUseCase} from "../use-cases/users-use-case";
import {UserFormsUseCase} from "../use-cases/user-forms-use-case";
import {UseCaseUseCase} from "../use-cases/use-case-use-case";
import {IUseCase} from "../domain/use-case";

@Injectable()
@Scope('request')
export class FormsService implements OnDestroy {

    constructor(
        private readonly formRepository: FormsRepository,
        private readonly usersUseCase: UsersUseCase,
        private readonly userFormsUseCase: UserFormsUseCase,
        private readonly caseUseCase: UseCaseUseCase
    ) {}

    public async getForms(): Promise<IForm[]> {
        return await this.formRepository.findForms();
    }

    public async getFormById(formId: string): Promise<IForm> {
        return await this.formRepository.findForm(formId);
    }

    private async saveSectionsUsers(form: IForm, useCases: IUseCase[]) {
        const { sections } = form;
        for (const section of sections) {
            for (const access of section.access) {
                await this.userFormsUseCase.saveUserForms(form, access.userId, useCases);
            }
        }
    }

    private async createUserForms(form: IForm, useCases: IUseCase[]){
        await this.saveSectionsUsers(form, useCases);
    }

    private async setAccessSectionsToAuthor(form: IForm, author: string) {
        const user = await this.usersUseCase.getUserByEmail(author);
        const newAccess: IAccess = {
            userId: author,
            userName: `${user.user_name}`,
            permission: ['write']
        }
        return {
            ...form,
            sections: form.sections.map((section:ISection) => {
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
        await this.createUserForms(newForm,[]);
        return newForm;
    }

    public async updateForm(form: IForm, email): Promise<IForm> {
        const formUpdated = await this.setAccessSectionsToAuthor(form, email);
        const newForm = await this.formRepository.updateForm(formUpdated);
        const useCases = await this.caseUseCase.updateFormUseCases(newForm, email);
        await this.createUserForms(newForm, useCases);
        return newForm;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
