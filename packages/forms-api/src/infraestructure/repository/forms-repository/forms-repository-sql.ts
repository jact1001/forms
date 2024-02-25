import {Injectable, OnDestroy} from "@tsed/common";
import {PrismaClient} from "@prisma/client";
import {IFormRepositoryPort} from "../../../core/ports/forms-ports/forms-repository-port";
import {IForm, ISection} from "../../../core/domain/form";
import {IField} from "../../../core/domain/form-fields";

const prisma = new PrismaClient()

@Injectable()
export class FormsRepositorySQL implements IFormRepositoryPort, OnDestroy {
    public async findForms() {
        prisma.form.findMany()
        return null
    }

    public async findForm(formId: string) {
        let result = await prisma.form.findUnique({
            where: {
                id: formId,
            }
        })
        console.log("result", result);
        return null
    }

    public async saveForm(form: IForm) {
        prisma.form.create({
            data: {
                form_name: form.form_name,
                state: form.state,
                author: form.author,
                sections: {
                    create: form.sections.map((section: ISection) => ({
                        section_name: section.sectionName,
                        access: JSON.stringify(section.access),
                        fields: {
                            create: section.fields.map((field: IField) => ({
                                form_field_id: field.field_id,
                                content: JSON.stringify(field)
                            }))
                        }
                    }))
                }
            }
        }).then();
        return null
    }

    public async updateForm(form: IForm) {
        return null
    }

    async $onDestroy(): Promise<void | Promise<any>> {
        await prisma.$disconnect()
    }
}
