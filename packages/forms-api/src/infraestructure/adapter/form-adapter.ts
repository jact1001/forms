import { IField } from './../../core/domain/form-fields';
import { IForm, ISection } from './../../core/domain/form';
import { Prisma } from "@prisma/client";

export class FormAdapter {

  private static mapToIField (data : any[]): IField[] {
    if (!data || data.length == 0) return [];

    return data.map((field : any) => JSON.parse(field.content as any));
  }

  private static mapToISection (data : any[]): ISection[] {
    if (!data || data.length == 0) return [];

    return data.map((section: any) => ({
      id: section.id,
      sectionName: section.section_name,
      access: [], 
      fields: this.mapToIField(section.fields),
    }))
  }

  static fromPrisma(prisma: any): IForm {
    const data: IForm = {
        id: prisma.id,
        form_name: prisma.form_name,
        author: prisma.author,
        sections: this.mapToISection(prisma.sections),
        state: prisma.state
    };

    return data;
  }

  static toPrismaCreate(form: IForm): Prisma.FormCreateInput {
    const data: Prisma.FormCreateInput  = {
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

    return data;
  }


  static toPrismaUpdate(form: IForm): Prisma.FormUpdateInput {
    const data: Prisma.FormUpdateInput = {
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

    return data;
  }
}
