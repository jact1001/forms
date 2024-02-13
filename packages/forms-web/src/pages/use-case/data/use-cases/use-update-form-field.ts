import { IUseCase } from "../domain/IUseCase";
import { TField } from "../domain/IFormFields";

export const updateFormField = (form:IUseCase, idSection:string, field:TField) => {
    const newSections = form?.sections.map((section)=> {
        if(section.id===idSection){
            const newFiles = section.fields.map((fieldModified)=>{
                if(fieldModified.form_field_id === field.form_field_id){
                    return field;
                }
                return fieldModified;
            });
            return {...section, fields: newFiles};
        }
        return section;
    });
    return {...form, sections: newSections};
}
