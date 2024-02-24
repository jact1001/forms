import {Injectable, OnDestroy, Scope} from "@tsed/common";
import {FormsRepository} from "../../infraestructure/repository/forms-repository/forms-repository";
import {IAccess, IForm, ISection} from "../domain/form";
import {UserFormsUseCase} from "../use-cases/user-forms-use-case";
import {UseCaseUseCase} from "../use-cases/use-case-use-case";
import {IUseCase} from "../domain/use-case";
import {UsersUseCase} from "../use-cases/users-use-case";
import {FormsRepositorySQL} from "../../infraestructure/repository/forms-repository-sql/forms-repository-sql";

@Injectable()
@Scope('request')
export class FormsService implements OnDestroy {

    constructor(
        private readonly formRepositorySQL: FormsRepositorySQL,
        private readonly formRepository: FormsRepository,
        private readonly usersUseCase: UsersUseCase,
        private readonly userFormsUseCase: UserFormsUseCase,
        private readonly caseUseCase: UseCaseUseCase
    ) {}

    public async getForms(): Promise<IForm[]> {
        return await this.formRepository.findForms();
    }

    public async getFormById(formId: string): Promise<IForm> {
         await this.formRepositorySQL.findForm(formId);
        return await this.formRepository.findForm(formId);
    }

    private async getFormUserIds(form: IForm) {
        const uniqueUserIds = new Set<string>();
        let hasAll = false;

        for (const section of form.sections) {
            for (const user of section.access) {
                if (user.userId === 'all') {
                    hasAll = true;
                } else {
                    uniqueUserIds.add(user.userId);
                }
            }
        }

        if (hasAll) {
            const users = await this.usersUseCase.getUsers('all');
            return users.map((user) => user.email);
        } else {
            return Array.from(uniqueUserIds);
        }
    }

    private async createUserForms(form: IForm, useCases: IUseCase[]){
        const userIds = await this.getFormUserIds(form);
        for (const userId of userIds) {
            await this.userFormsUseCase.saveUserForm(form, userId, useCases);
        }
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
        await this.formRepositorySQL.saveForm({...formUpdated, id: newForm.id, author: email});
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
