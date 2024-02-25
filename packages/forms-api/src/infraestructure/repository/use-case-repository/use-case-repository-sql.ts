import {Inject, Injectable, OnDestroy} from "@tsed/common";
import {MongooseModel} from "@tsed/mongoose";
import {UseCase} from "./use-case-schema";
import {IUseCaseRepositoryPort} from "../../../core/ports/use-case-ports/use-case-repository-port";
import {ICaseState, IUseCase} from "../../../core/domain/use-case";
import {PrismaClient} from "@prisma/client";
import {ISection} from "../../../core/domain/form";
import {IField} from "../../../core/domain/form-fields";

const prisma = new PrismaClient()

@Injectable()
export class UseCaseRepositorySQL implements IUseCaseRepositoryPort, OnDestroy {
    public async findUseCase(useCaseId: string, email: string) {
        return null;
    }

    public async findUseCasesByFormId(formId: string) {
        return null;
    }

    public async saveUseCase(currentCase: IUseCase) {
        prisma.useCase.create({
            data: {
                id: currentCase.id,
                case_name: currentCase.case_name,
                case_state: JSON.stringify(currentCase.case_state),
                case_creator: currentCase.case_creator,
                form_id: currentCase.form_id,
                form_name: currentCase.form_name,
                sections: {
                    create: currentCase.sections.map((section: ISection) => ({
                        id: section.id,
                        section_name: section.sectionName
                    }))
                }
            }
        }).then();
        return null;
    }

    public async updateUseCase(useCase: IUseCase) {
        prisma.useCase.update({
            where: {
                id: useCase.id
            },
            data: {
                sections: {
                    update: useCase.sections.map((section: ISection) => ({
                        where: {id: section.id},
                        data: {
                            section_name: section.sectionName,
                            fields: {
                                create: section.fields.map((field: IField) => ({
                                    // id: field.field_id,
                                    form_field_id: field.field_id,
                                    content: JSON.stringify(field)
                                }))
                            }
                        }
                    }))
                }
            }
        }).then();
        return null;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
