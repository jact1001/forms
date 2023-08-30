import { IForm } from "../domain/IForm";

export const validateForm = (form: IForm) => {

    const isValidFormName = form.form_name !== '';
    const isNotValidSections = form.sections?.some((section) => section.sectionName === '' || section.fields.length === 0 || section.access.length ===0);

    return isValidFormName && !isNotValidSections;
}
