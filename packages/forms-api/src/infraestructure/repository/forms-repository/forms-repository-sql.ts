import {Injectable, OnDestroy} from "@tsed/common";
import {PrismaClient} from "@prisma/client";
import {IFormRepositoryPort} from "../../../core/ports/forms-ports/forms-repository-port";
import {IForm, ISection} from "../../../core/domain/form";

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
        prisma.form.create( {
            data: {
                form_name: form.form_name,
                state: form.state,
                author: form.author,
                sections: {
                    create: form.sections.map((section:ISection) => ({
                        id: section.id,
                        section_name: section.sectionName
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
