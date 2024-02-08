import { IRadio, IOptionValue } from "../../../../../../../data/domain/IFormFields";
import '../styles/radio.scss';
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import React, { ChangeEvent } from 'react';
import { useDispatch } from "react-redux";

const defaultClass = 'form-radio-group';

interface IInputRadio {
    field: IRadio;
    sectionId: string;
}

export const Radio = ({field, sectionId}:IInputRadio) => {

    const dispatch = useDispatch();

    const { type, options }= field;

    const handleOnChange = ({ target: {value} }: ChangeEvent<HTMLInputElement>) => {
        const newValue=options.find((option)=>option.id===value)||options[0];
        updateStoreField(newValue);
    }

    const updateStoreField = (value:IOptionValue) => {
        const newField = {
            ...field,
            value
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    return (
        <>
            <div className={`${defaultClass}__options-container`}>
                {options.map((option)=>{
                    return (
                        <div className={defaultClass}>
                            <label htmlFor={option.id} className={`${defaultClass}__label`}>
                                <input
                                    onChange={handleOnChange}
                                    className={`${defaultClass}__radio`}
                                    type={ type }
                                    id={ option.id + field.form_field_id }
                                    name={ option.id + field.form_field_id }
                                    value={ option.id }
                                    checked={ option.id === field.value.id }
                                />{option.text}
                            </label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
