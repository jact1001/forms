
import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import {ICheckbox, IOptionValue} from "../../../../../../../data/domain/IFormFields";
import '../styles/checkbox.scss';

const defaultClass = 'checkbox-group';

export const Checkbox = ({field_id, type, options}:ICheckbox) => {

        return (
            <>
            <div className={`${defaultClass}__options-container`}>
                {options?.map((option)=>{
                    return (
                        <div className={defaultClass}>
                            <label htmlFor={field_id+option.id} className={`${defaultClass}__label`}>
                                <input
                                    className={`${defaultClass}__checkbox`}
                                    type={ type }
                                    id={ field_id + option.id }
                                    name={ field_id }
                                    value={ option.text }
                                />{ option.text }
                            </label>
                        </div>
                    )
                })}
            </div>
        </>
        )

}
