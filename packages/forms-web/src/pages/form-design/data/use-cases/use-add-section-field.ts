import {TField} from "../domain/IFormFields";
import {ISection} from "../domain/IForm";

export const addSectionField = (sectionId: string, field: TField, sections: ISection[]) => {
    return sections.map((section) => {
        if (section.id === sectionId) {
            const { fields } = section;
            return {...section, fields: fields?.concat(field)};
        }
        return section;
    });
}
