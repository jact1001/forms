import React, {useState} from 'react';
import '../styles/form-title.scss';
import FormIcon from "../icons/FormIcon";

const defaultClass = 'form-title';

export const FormTitle = () => {

    return (
        <div className={`${defaultClass}__title`}>
            <div className={`${defaultClass}__icon`}>
                <FormIcon />
            </div>
            <b>Mis Formularios</b>
        </div>
    );
};