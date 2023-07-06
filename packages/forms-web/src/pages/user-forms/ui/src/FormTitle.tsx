import React, {useState} from 'react';
import '../styles/form-title.scss';
import FormIcon from "../icons/FormIcon";

const defaultClass = 'form-title';

export const FormTitle = () => {

    return (
        <div className={`${defaultClass}__title`}>
            <FormIcon />
            <b>Mis Formularios</b>
        </div>
    );
};