import {Injectable, OnDestroy} from "@tsed/common";
import {IUseCaseRepositoryPort} from "../../../core/ports/use-case-ports/use-case-repository-port";
import {IUseCase} from "../../../core/domain/use-case";
import {PrismaClient} from "@prisma/client";
import {ISection} from "../../../core/domain/form";
import {IField} from "../../../core/domain/form-fields";
import {uuid} from 'uuidv4';

const prisma = new PrismaClient()

@Injectable()
export class UseCaseRepositorySQL implements IUseCaseRepositoryPort, OnDestroy {
    public async findUseCase(useCaseId: string, email: string) {
        const result = await prisma.useCase
            .findUnique({
                where: {
                    id: useCaseId
                },
                select: {
                    id: true,
                    case_name: true,
                    case_creator: true,
                    case_state: true,
                    form_id: true,
                    form_name: true,
                    sections: {
                        select: {
                            id: true,
                            access: true,
                            section_name: true,
                            fields: true
                        }
                    }
                }
            });

        return {
            id: result.id,
            case_name: result.case_name,
            case_creator: result.case_creator,
            case_state: JSON.parse(result.case_state),
            form_id: result.form_id,
            form_name: result.form_name,
            sections: result.sections.map((s) => {
                const section: ISection = {
                    ...s,
                    sectionName: s.section_name,
                    access: JSON.parse(s.access),
                    fields: s.fields.map((f) => {
                        const content = JSON.parse(f.content)
                        const field: IField =
                            {
                                ...content,
                                field_id: f.field_id,
                                form_field_id: f.form_field_id,
                                isRequired: content.isRequired
                            }
                        return field
                    })
                }
                return section;
            })
        }
    }

    public async findUseCasesByFormId(formId: string) {
        const results = await prisma.useCase.findMany({
            where: {
                form_id: formId
            },
            select: {
                id: true,
                case_name: true,
                case_creator: true,
                case_state: true,
                form_id: true,
                form_name: true,
                sections: {
                    select: {
                        id: true,
                        access: true,
                        section_name: true,
                        fields: true
                    }
                }
            }
        });
        return results.map((r) => {
            const result: IUseCase = {
                id: r.id,
                case_name: r.case_name,
                case_creator: r.case_creator,
                case_state: JSON.parse(r.case_state),
                form_id: r.form_id,
                form_name: r.form_name,
                sections: r.sections.map((s) => {
                    const section: ISection = {
                        ...s,
                        sectionName: s.section_name,
                        access: JSON.parse(s.access),
                        fields: s.fields.map((f) => {
                            const content = JSON.parse(f.content)
                            const field: IField =
                                {
                                    ...content,
                                    field_id: f.field_id,
                                    form_field_id: f.form_field_id,
                                    isRequired: content.isRequired
                                }
                            return field
                        })
                    }
                    return section;
                })
            }
            return result;
        })
    }

    public async saveUseCase(currentCase: IUseCase) {
        const result = await prisma.useCase.create({
            data: {
                id: currentCase.id,
                case_name: currentCase.case_name,
                case_state: JSON.stringify(currentCase.case_state),
                case_creator: currentCase.case_creator,
                form_id: currentCase.form_id,
                form_name: currentCase.form_name,
                sections: {
                    create: currentCase.sections.map((section: ISection) => ({
                        id: uuid(),
                        section_name: section.sectionName,
                        access: JSON.stringify(section.access),
                        fields: {
                            create: section.fields.map((field: IField) => ({
                                form_field_id: uuid(),
                                content: JSON.stringify(field)
                            }))
                        }
                    }))
                }
            },
            select: {
                id: true,
                case_name: true,
                case_state: true,
                case_creator: true,
                form_id: true,
                form_name: true,
                sections: {
                    select: {
                        id: true,
                        access: true,
                        section_name: true,
                        fields: true
                    }
                }
            }
        });

        return {
            id: result.id,
            case_name: result.case_name,
            case_state: JSON.parse(result.case_state),
            case_creator: result.case_creator,
            form_id: result.form_id,
            form_name: result.form_name,
            sections: result.sections.map((s) => {
                const section: ISection = {
                    ...s,
                    sectionName: s.section_name,
                    access: JSON.parse(s.access),
                    fields: s.fields.map((f) => {
                        const content = JSON.parse(f.content)
                        const field: IField =
                            {
                                ...content,
                                field_id: f.field_id,
                                form_field_id: f.form_field_id,
                                isRequired: content.isRequired
                            }
                        return field
                    })
                }
                return section;
            })
        }
    }


    public async updateUseCase(useCase: IUseCase) {
        const result = await prisma.useCase.update({
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
                                update: section.fields.map((field: IField) => ({
                                    // id: field.field_id,
                                    where: {field_id: field.field_id},
                                    data: {
                                        form_field_id: field.form_field_id,
                                        content: JSON.stringify(field)
                                    }
                                }))
                            }
                        }
                    }))
                }
            },
            select: {
                id: true,
                case_name: true,
                case_state: true,
                case_creator: true,
                form_id: true,
                form_name: true,
                sections: {
                    select: {
                        id: true,
                        access: true,
                        section_name: true,
                        fields: true
                    }
                }
            }
        })
        return {
            ...result,
            case_state: JSON.parse(result.case_state),
            sections: result.sections.map((s) => {
                const section: ISection = {
                    ...s,
                    sectionName: s.section_name,
                    access: JSON.parse(s.access),
                    fields: s.fields.map((f) => {
                        const content = JSON.parse(f.content)
                        const field: IField =
                            {
                                ...content,
                                field_id: f.field_id,
                                form_field_id: f.form_field_id,
                                isRequired: content.isRequired
                            }
                        return field
                    })
                }
                return section;
            })
        }
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
