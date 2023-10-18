import { IOptionValue, IRadio } from "../../../../../../../data/domain/IFormFields";
import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { useDispatch } from "react-redux";

import '../styles/radio.scss';

const defaultClass = 'radio-group';

export const Radio = ({field_id, type, options}:IRadio) => {

    return (
        <>
            <div className={`${defaultClass}__options-container`}>
                {options.map((option)=>{
                    return (
                        <div className={defaultClass}>
                            <label htmlFor={option.id} className={`${defaultClass}__label`}>
                                <input
                                    className={`${defaultClass}__radio`}
                                    type={ type }
                                    id={ option.id }
                                    name={ field_id }
                                    value={ option.text }
                                />{option.text}
                            </label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
