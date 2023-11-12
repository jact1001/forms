import {IAccess, ISection} from "../domain/IForm";
import { IFormState } from "../state/reducers/form.reducer";

export const addSection = (sectionId: string, sectionsState: ISection[], initialState:IFormState, authorAccess: IAccess) => {
    const {form: {sections: initialSections}} = initialState;
    const initialSection = initialSections[0];
    const newSection = {...initialSection, id: sectionId, access: [authorAccess] };
    return sectionsState.concat(newSection);
}
