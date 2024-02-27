import { Injectable, OnDestroy, Scope } from "@tsed/common";
import { UseCaseRepository } from "../../infraestructure/repository/use-case-repository/use-case-repository";
import { IUseCase } from "../domain/use-case";
import {IForm, ISection} from "../domain/form";
import {IFormCase} from "../domain/user-forms";
import {UserFormsRepository} from "../../infraestructure/repository/user-forms-repository/user-forms-repository";

@Injectable()
@Scope('request')
export class UseCaseService implements OnDestroy {

    constructor(
        private readonly useCaseRepository: UseCaseRepository,
        private readonly userFormsRepository: UserFormsRepository
    ) {}

    public async saveUseCase(useCase: IUseCase): Promise<IUseCase> {
        return await this.useCaseRepository.saveUseCase(useCase);
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

    public async updateFormUseCases(form: IForm, email: string): Promise<IUseCase[]> {
        const useCases = await this.useCaseRepository.findUseCasesByFormId(form.id);
        const updatedUseCases: IUseCase[] = [];
        for (const useCase of useCases) {
            let newSections: ISection[] = [...form.sections];
            const updatedSections = useCase.sections.map((useCaseSection) => {
                const matchingSectionPosition = newSections.findIndex((section, index) => useCaseSection.id.toString() === section.id.toString());
                if (matchingSectionPosition !== -1) {
                    const matchingSection = newSections[matchingSectionPosition];
                    newSections.splice(matchingSectionPosition, 1);
                    return {
                        id: useCaseSection.id,
                        sectionName: matchingSection.sectionName,
                        access: matchingSection.access,
                        fields: [
                            ...useCaseSection.fields.map(field => {
                                const matchingField = matchingSection.fields.find(f => f.form_field_id === field.form_field_id);
                                return matchingField && !field.value ? matchingField : field.value ? field : undefined;
                            }).filter(field => field !== undefined),
                            ...matchingSection.fields.filter(field => !useCaseSection.fields.some(f => f.form_field_id === field.form_field_id))
                        ]
                    };
                } else {
                    return useCaseSection;
                }
            });

            const updatedUseCase: IUseCase = {
                id: useCase.id,
                case_name: useCase.case_name,
                case_creator: useCase.case_creator ?? '',
                case_state: useCase.case_state,
                form_id: useCase.form_id,
                form_name: useCase.form_name,
                sections: [...updatedSections, ...newSections]
            };

            try {
                const newUseCase = await this.updateUseCase(updatedUseCase, email);
                updatedUseCases.push(newUseCase);
            } catch (error) {
                console.error(`Error updating use case: ${error.message}`);
            }
        }
        return updatedUseCases;
    }

    $onDestroy() {
        console.log('Service destroyed');
    }
}
