import React, {useState} from 'react';
import '../styles/return-button.scss';

import ReturnIcon from "../icons/ReturnIcon";


const defaultClass = 'return-button';

export const ReturnButton = () => {
    return (
        <div className={`${defaultClass}__return-container`}>
            <div className={`${defaultClass}__return-button-container`}>
                <button className={`${defaultClass}__return-button`}>
                    <ReturnIcon />
                    <b className={`${defaultClass}__return-button-title`}>VOLVER</b>
                </button>
            </div>
        </div>
    );
};