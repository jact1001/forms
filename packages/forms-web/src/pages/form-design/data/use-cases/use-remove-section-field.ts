import {ISection} from "../domain/IForm";

export const removeSectionField = (sectionId: string, fieldId: string, sections: ISection[]) => {
    return sections.map((section) => {
        if (section.id === sectionId) {
            const { fields } = section;
            return {...section, fields: fields.filter((field) => field.form_field_id !== fieldId)};
        }
        return section;
    });
}
