import { FormAdapter } from "./../../adapter/form-adapter";
import { Injectable, OnDestroy } from "@tsed/common";
import { PrismaClient, Prisma } from "@prisma/client";
import { IFormRepositoryPort } from "../../../core/ports/forms-ports/forms-repository-port";
import { IForm } from "../../../core/domain/form";

import to from "await-to-js";

@Injectable()
export class FormsRepositorySQL implements IFormRepositoryPort, OnDestroy {
  private prisma: PrismaClient = new PrismaClient();

  public async findForms(): Promise<IForm[]> {
    const [err, data] = await to<any[]>(
      this.prisma.form.findMany({
        include: {
          sections: {
            include: {
              fields: true,
            },
          },
        },
      })
    );
    if (err) {
      const msg: string = `Error forms-repository-sql find-forms ${err.message}`;
      console.log(msg);
      return Promise.reject(new Error(msg));
    }

    const response = data.map((d) => FormAdapter.fromPrisma(d));
    return Promise.resolve(response);
  }

  public async findForm(formId: string): Promise<IForm> {
    const [err, form] = await to(
      this.prisma.form.findUnique({
        where: {
          id: formId,
        },
        include: {
          sections: {
            include: {
              fields: true,
            },
          },
        },
      })
    );

    if (err) {
      const msg: string = `Error forms-repository-sql find-form ${err.message}`;
      console.log(msg);
      return Promise.reject(new Error(msg));
    }

    return Promise.resolve(FormAdapter.fromPrisma(form));
  }

  public async saveForm(form: IForm): Promise<IForm> {
    console.log("saveForm repository");
    const data = FormAdapter.toPrismaCreate(form);
    const include : Prisma.FormInclude = {
        sections: {
          include: {
            fields: true,
          },
        },
      };

    const [err, response] = await to(this.prisma.form.create({ data, include }));
    
    if (err) {
      const msg: string = `Error forms-repository-sql save-form ${err.message}`;
      console.log(msg);
      return Promise.reject(new Error(msg));
    } 
      
    return Promise.resolve(FormAdapter.fromPrisma(response));
  }

  public async updateForm(form: IForm): Promise<IForm> {
    const where: Prisma.FormWhereUniqueInput = { id: form.id };
    const data = FormAdapter.toPrismaUpdate(form);

    const [err, response] = await to(this.prisma.form.update({ data, where }));

    if (err) {
      const msg: string = `Error forms-repository-sql update-form ${err.message}`;
      console.log(msg);
      return Promise.reject(new Error(msg));
    }

    return Promise.resolve(response as IForm);
  }

  async $onDestroy(): Promise<void | Promise<any>> {
    await this.prisma.$disconnect();
  }
}
