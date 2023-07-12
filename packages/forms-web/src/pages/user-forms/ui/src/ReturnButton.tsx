import React, {useState} from 'react';
import '../styles/return-button.scss';
import ReturnIcon from "../icons/ReturnIcon";


const defaultClass = 'return-button';

export const ReturnButton = () => {
    return (
        <button className={`${defaultClass}__return-button`}>
            <ReturnIcon />
            <b className={`${defaultClass}__return-button-title`}>VOLVER</b>
        </button>
    );
};