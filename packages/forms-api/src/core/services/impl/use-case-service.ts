import {OnDestroy} from "@tsed/common";
import {IUseCase} from "../../domain/use-case";
import {IForm} from "../../domain/form";
import {IFormCase} from "../../domain/user-forms";
import {IUseCaseService} from "../i-use-case-service";
import {IUseCaseRepositoryPort} from "../../ports/use-case-ports/use-case-repository-port";
import {IUserFormsRepositoryPort} from "../../ports/user-forms-ports/user-forms-repository-port";

export class UseCaseService implements IUseCaseService, OnDestroy {

    constructor(
        private readonly useCaseRepository: IUseCaseRepositoryPort,
        private readonly userFormsRepository: IUserFormsRepositoryPort
    ) {
    }

    public async saveUseCase(useCase: IUseCase): Promise<IUseCase> {
        const result = await this.useCaseRepository.saveUseCase(useCase);
        return result;
    }

    public async updateUseCase(useCase: IUseCase, email: string): Promise<IUseCase> {
        const formsUseCase: IFormCase = {
            case_id: useCase.id,
            name: useCase.case_name,
            state: useCase.case_state
        }
        await this.userFormsRepository.updateUseCase(formsUseCase, useCase.form_id, email);
        return await this.useCaseRepository.updateUseCase(useCase);
    }

    public async getUseCasesByUseCaseId(caseId: string, email: string): Promise<IUseCase> {
        let useCase = await this.useCaseRepository.findUseCase(caseId, email);
        return {
            id: useCase.id,
            case_name: useCase.case_name,
            case_creator: useCase.case_creator ?? '',
            case_state: useCase.case_state,
            form_id: useCase.form_id,
            form_name: useCase.form_name,
            sections: useCase.sections.filter((section) => {
                if (section.access.find((access) => (access.userId === 'all' || access.userId === email))) return section;
            })
        }
    }

    public async getUseCasesByFormId(formId: string): Promise<IUseCase[]> {
        return await this.useCaseRepository.findUseCasesByFormId(formId);
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
