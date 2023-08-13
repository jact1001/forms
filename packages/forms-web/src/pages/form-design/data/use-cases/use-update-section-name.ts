import { ISection } from "../domain/IForm";

export const updateSectionName = (
    sectionId: string,
    name: string,
    sections: ISection[]
    ) => {

    return sections.map((section) => {
        if (section.id === sectionId){
            section.sectionName = name;
            return section;
        }
        return section;
    });
}
