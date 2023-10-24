import { IText, TField } from "../../../../../../../data/domain/IFormFields";
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import '../styles/text-input.scss';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';

const defaultClass = 'text-input';

interface ITextInput {
    field: IText;
    sectionId: string;
}

export const TextInput = ({field, sectionId}: ITextInput) => {

    const dispatch = useDispatch();

    const handleOnChange = ({ target: {value} }: ChangeEvent<HTMLInputElement>) => {
        updateStoreField(value);
    }

    const updateStoreField = (value:string) => {
        const newField = {
            ...field,
            value
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    return (
        <input onChange={handleOnChange} type={ field.type } placeholder={ field.placeholder } value={ field.value } className={ `${defaultClass}` } />
    )
}
