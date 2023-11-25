import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { UseCaseRepository } from "../../infraestructure/repository/use-case-repository/use-case-repository";
import { IUseCase } from "../domain/use-case";
import {IForm} from "../domain/form";

@Injectable()
@Scope('request')
export class UseCaseService implements OnDestroy {

    constructor(
        private readonly useCaseRepository: UseCaseRepository
    ) {}

    public async saveUseCase(useCase: IUseCase): Promise<IUseCase> {
        return await this.useCaseRepository.saveUseCase(useCase);
    }

    public async updateUseCase(useCase: IUseCase): Promise<IUseCase> {
        return await this.useCaseRepository.updateUseCase(useCase);
    }

    public async getUseCasesByUseCaseId(caseId: string, email: string): Promise<IUseCase> {
        return await this.useCaseRepository.findUseCase(caseId, email);
    }

    public async getUseCasesByFormId(formId: string): Promise<IUseCase[]> {
        return await this.useCaseRepository.findUseCasesByFormId(formId);
    }

    public async updateFormUseCases(form: IForm): Promise<IUseCase[]> {
        const useCases = await this.useCaseRepository.findUseCasesByFormId(form.id);
        form.sections.forEach((section) => {
            useCases.forEach((useCase) => {
                const updatedSection = useCase.sections.find((useCaseSection) => useCaseSection._id === section._id);
                if (updatedSection) {
                    updatedSection.fields = updatedSection.fields.map((field) =>
                        field?.value ? field : section.fields.find((f) => f.form_field_id === field.form_field_id) || field
                    );
                }
            });
        });
        return useCases;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
