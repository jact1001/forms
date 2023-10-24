import { IForm, ISection } from "../domain/IForm";
import { TField } from "../domain/IFormFields";

export const updateFormField = (form:IForm, idSection:string, field:TField) => {
    const newform = form.sections.map((section)=> {
        if(section.id===idSection){
            const newfiles = section.fields.map((fieldmodified)=>{
                if(fieldmodified.field_id===field.field_id){
                    return field;
                }
                return fieldmodified;
            });
            //console.log("2 section: ", newfiles);
            return {...section, fields:newfiles}; 
        }
        
        return section;
    });
    //console.log("new form: ", newform);
    return {...form, sections: newform};
}