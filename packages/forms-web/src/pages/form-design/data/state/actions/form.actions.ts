import { IForm } from "../../domain/IForm";
import { TField } from "../../domain/IFormFields";

export enum ActionType {
    SAVE_FORM_PENDING = 'SAVE_FORM_PENDING',
    SAVE_FORM_SUCCESS = 'SAVE_FORM_SUCCESS',
    SAVE_FORM_FAIL = 'SAVE_FORM_FAIL',
    ADD_SECTION_FIELD = 'ADD_SECTION_FIELD',
    UPDATE_SECTION_FIELD = 'UPDATE_SECTION_FIELD',
    ADD_SECTION = 'ADD_SECTION',
}

interface actionPending {
    type: ActionType.SAVE_FORM_PENDING;
}

interface actionSuccess {
    type: ActionType.SAVE_FORM_SUCCESS;
    payload: IForm;
}

interface actionFail {
    type: ActionType.SAVE_FORM_FAIL;
    payload: string;
}

interface addSectionFieldAction {
    type: ActionType.ADD_SECTION_FIELD;
    payload: {field: TField, sectionId: string};
}

interface updateSectionFieldAction {
    type: ActionType.UPDATE_SECTION_FIELD;
    payload: {field: TField, sectionId: string};
}

interface addSectionAction {
    type: ActionType.ADD_SECTION;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail | addSectionFieldAction | updateSectionFieldAction | addSectionAction;
