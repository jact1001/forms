import { IUseCase } from "../domain/IUseCase";

export const validateForm = (form: IUseCase) => {

    const isValidFormName = form.form_name !== '';
    const isNotValidSections = form.sections?.some((section) => section.sectionName === '' || section.fields.length === 0 || section.access.length ===0);

    return isValidFormName && !isNotValidSections;
}
