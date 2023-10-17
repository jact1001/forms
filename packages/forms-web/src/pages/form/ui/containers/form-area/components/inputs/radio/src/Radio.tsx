import { IOptionValue, IRadio } from "../../../../../../../data/domain/IFormFields";
import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { useDispatch } from "react-redux";

import '../styles/radio.scss';

const defaultClass = 'radio-group';

export const Radio = ({type, label, options}:IRadio) => {

    return (
        <>
            <div className={`${defaultClass}__options-container`}>
                {options.map((option)=>{
                    return (
                        <div className={defaultClass}>
                            <input
                                className={`${defaultClass}__radio`}
                                type={type}
                                id={option.id}
                                value={option.text}
                                name={label}
                            />
                            <label htmlFor={option.id} className={`${defaultClass}__label`}>
                                {option.text}
                            </label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
