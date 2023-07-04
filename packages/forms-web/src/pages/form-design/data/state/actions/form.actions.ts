import { IForm } from "../../domain/IForm";
import { TField } from "../../domain/IFormFields";

export enum ActionType {
    SAVE_FORM_PENDING = 'SAVE_FORM_PENDING',
    SAVE_FORM_SUCCESS = 'SAVE_FORM_SUCCESS',
    SAVE_FORM_FAIL = 'SAVE_FORM_FAIL',
    ADD_SECTION_FIELD = 'ADD_SECTION_FIELD',
    UPDATE_SECTION_FIELD = 'UPDATE_SECTION_FIELD'
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
    payload: TField;
}

interface updateSectionFieldAction {
    type: ActionType.UPDATE_SECTION_FIELD;
    payload: TField;
}

export type Action = actionPending | actionSuccess | actionFail | addSectionFieldAction | updateSectionFieldAction;
