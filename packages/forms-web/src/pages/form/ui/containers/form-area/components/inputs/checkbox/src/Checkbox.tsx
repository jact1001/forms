
import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import {ICheckbox, IOptionValue} from "../../../../../../../data/domain/IFormFields";
import '../styles/checkbox.scss';

const defaultClass = 'checkbox-group';



export const Checkbox = () => {

        return (
            <div className={defaultClass}>
                <input
                    className={`${defaultClass}__checkbox`}
                    type='checkbox'
                    id='check1'
                    name='name1'
                    value='valor1'
                />
                <div className={`${defaultClass}__label`}>
                    <div className={`${defaultClass}__label__input-line`} >
                        <input
                            className={`${defaultClass}__label__input-text`}
                            type='text'
                            placeholder='{option_placeholder}'
                            value='{value.text}'
                        />
                        <span className={`${defaultClass}__label__line`}/>
                    </div>
                </div>
            </div>
        )

}
