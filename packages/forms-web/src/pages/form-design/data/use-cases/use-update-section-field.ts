import {TField} from "../domain/IFormFields";
import {ISection} from "../domain/IForm";

export const updateSectionField = (sectionId: string, field: TField, sections: ISection[]) => {
    return sections.map((section) => {
        if (section.id === sectionId) {
            return {
                ...section,
                fields: section.fields.map((saveField: TField) => {
                    if (saveField.form_field_id === field.form_field_id) {
                        return field;
                    }
                    return saveField;
                })
            }
        }
        return section;
    });
}
