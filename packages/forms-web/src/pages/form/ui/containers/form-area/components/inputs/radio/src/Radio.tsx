
import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { useDispatch } from "react-redux";

import '../styles/radio.scss';

const defaultClass = 'radio-group';



export const Radio = () => {


    return (
        <>
            <div className={`${defaultClass}__options-container`}>
                        <div className={defaultClass}>
                            <input
                                className={`${defaultClass}__radio`}
                                type='radio'
                                id='valor'
                                name='igual'
                                value='valor'
                            />
                            <input
                                className={`${defaultClass}__radio`}
                                type='radio'
                                id='valor2'
                                name='igual'
                                value='valor2'
                            />
                        </div>
            </div>
        </>
    )
}
