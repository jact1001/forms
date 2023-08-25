import {IAccess, IForm} from "../../domain/IForm";
import { TField } from "../../domain/IFormFields";
import {IUser} from "../../domain/IUser";

export enum ActionType {
    SAVE_FORM_PENDING = 'SAVE_FORM_PENDING',
    SAVE_FORM_SUCCESS = 'SAVE_FORM_SUCCESS',
    SAVE_FORM_FAIL = 'SAVE_FORM_FAIL',
    ADD_SECTION_FIELD = 'ADD_SECTION_FIELD',
    UPDATE_SECTION_ACCESS = 'UPDATE_SECTION_ACCESS',
    UPDATE_SECTION_FIELD = 'UPDATE_SECTION_FIELD',
    UPDATE_SECTION_NAME = 'UPDATE_SECTION_NAME',
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

interface updateSectionAccessAction {
    type: ActionType.UPDATE_SECTION_ACCESS;
    payload: {access: IAccess[], sectionId: string};
}

interface updateSectionFieldAction {
    type: ActionType.UPDATE_SECTION_FIELD;
    payload: {field: TField, sectionId: string};
}

interface addSectionAction {
    type: ActionType.ADD_SECTION;
    payload: string;
}

interface updateSectionName {
    type: ActionType.UPDATE_SECTION_NAME;
    payload: {name: string, sectionId: string};
}

export type Action =
    actionPending |
    actionSuccess |
    actionFail |
    addSectionFieldAction |
    updateSectionAccessAction |
    updateSectionFieldAction |
    addSectionAction |
    updateSectionName;
