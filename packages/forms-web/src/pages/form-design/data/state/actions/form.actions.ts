import {IAccess, IForm} from "../../domain/IForm";
import { TField } from "../../domain/IFormFields";
import {IUser} from "../../domain/IUser";

export enum ActionType {
    ACTION_FORM_PENDING = 'ACTION_FORM_PENDING',
    ACTION_FORM_SUCCESS = 'ACTION_FORM_SUCCESS',
    ACTION_FORM_FAIL = 'ACTION_FORM_FAIL',
    UPDATE_FORM_NAME = 'UPDATE_FORM_NAME',
    ADD_SECTION_FIELD = 'ADD_SECTION_FIELD',
    UPDATE_SECTION_ACCESS = 'UPDATE_SECTION_ACCESS',
    UPDATE_SECTION_FIELD = 'UPDATE_SECTION_FIELD',
    UPDATE_SECTION_NAME = 'UPDATE_SECTION_NAME',
    ADD_SECTION = 'ADD_SECTION',
}

interface actionPending {
    type: ActionType.ACTION_FORM_PENDING;
}

interface actionSuccess {
    type: ActionType.ACTION_FORM_SUCCESS;
    payload: IForm;
}

interface actionFail {
    type: ActionType.ACTION_FORM_FAIL;
    payload: string;
}

interface updateFormNameAction {
    type: ActionType.UPDATE_FORM_NAME;
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
    updateFormNameAction |
    addSectionFieldAction |
    updateSectionAccessAction |
    updateSectionFieldAction |
    addSectionAction |
    updateSectionName;
