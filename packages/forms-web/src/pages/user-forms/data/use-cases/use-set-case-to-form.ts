import {IFormCase, IUserForms} from "../domain/IUserForms";
import {ICase, ICaseState} from "../domain/ICase";

export const setCaseToForm = (userForms: IUserForms, newCase: ICase) => {
    return {
        ...userForms,
        forms: userForms?.forms.map((form) => {
            if (form.form_id === newCase.form_id){
                const newUserFormCase: IFormCase = {
                    case_id: newCase.id,
                    case_creator: newCase.case_creator,
                    name: newCase.case_name,
                    state: newCase.case_state || {} as ICaseState
                }
                return {
                    ...form,
                    cases: [...form.cases, newUserFormCase]
                }
            }
            return form;
        })
    }
}
