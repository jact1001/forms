import {IAccess, ISection} from "../domain/IForm";

export const updateSectionAccess = (sectionId: string, access: IAccess[], sections: ISection[]) => {
    return sections.map((section) => {
        if (section.id === sectionId) {
            return {...section, access};
        }
        return section;
    });
}
