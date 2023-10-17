
import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import {ICheckbox, IOptionValue} from "../../../../../../../data/domain/IFormFields";
import '../styles/checkbox.scss';

const defaultClass = 'checkbox-group';

export const Checkbox = ({type, options}:ICheckbox) => {

        return (
            <>
            <div className={`${defaultClass}__options-container`}>
                {options.map((option)=>{
                    return (
                        <div className={defaultClass}>
                            <input
                                className={`${defaultClass}__checkbox`}
                                type={type}
                                id={option.id}
                                value={option.text}
                                name={option.id}
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
