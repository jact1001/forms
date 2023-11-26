import {ISection} from "../domain/IForm";

export const removeSection = (sectionId: string, sectionsState: ISection[]) => {
    return sectionsState.filter((section) => section.id !== sectionId);
}
