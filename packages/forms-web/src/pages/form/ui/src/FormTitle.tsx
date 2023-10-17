import React, {useState} from 'react';
import '../styles/form-title.scss';
//import FormIcon from "../icons/FormIcon";

const defaultClass = 'form-title';

export const FormTitle = () => {

    return (
        <div className={`${defaultClass}__container`}>
            <div className={`${defaultClass}__title`}>
                <b>Mi Formulario</b>
            </div>
        </div>
    );
};