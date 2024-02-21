import {Inject, Injectable, OnDestroy} from "@tsed/common";

import {IFormRepositoryPort} from "../../../core/ports/forms-ports/forms-repository-port";
import {IForm} from "../../../core/domain/form";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
@Injectable()
export class FormsRepositorySQL implements IFormRepositoryPort, OnDestroy {


    public async findForms () {
        prisma.form.findMany()
        return null
    }

    public async findForm (formId: string) {
        return null
    }

    public async saveForm (form: IForm) {
       return null
    }

    public async updateForm (form: IForm) {
      return null
    }

    async $onDestroy(): Promise<void | Promise<any>> {
        await prisma.$disconnect()
    }
}
