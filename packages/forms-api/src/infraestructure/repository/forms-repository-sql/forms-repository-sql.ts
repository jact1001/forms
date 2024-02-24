import {Injectable, OnDestroy} from "@tsed/common";
import {PrismaClient} from "@prisma/client";
import {IFormRepositoryPort} from "../../../core/ports/forms-ports/forms-repository-port";
import {IForm} from "../../../core/domain/form";

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
                id: form.id,
                form_name: form.form_name,
                state: form.state,
                author: form.author,
                sections: {
                    create: [{
                        id: form.id,
                        section_name: form.sections[0].sectionName
                        //form_id:form.id
                    }
                    ]
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
