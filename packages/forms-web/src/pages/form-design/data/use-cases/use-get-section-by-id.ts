import {ISection} from "../domain/IForm";

export const useGetSectionById = (sections: ISection[], sectionId: string) => {
    return sections.find((section) => section.id === sectionId);
}
