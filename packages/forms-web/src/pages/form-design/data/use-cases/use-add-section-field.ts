import { TField } from "../domain/IFormFields";
import { ISection } from "../domain/IForm";

export const addSectionField = (sectionId: string, field: TField, sections: ISection[]) => {
    return [{...sections[0], fields: [...sections[0].fields, field]}];
}
