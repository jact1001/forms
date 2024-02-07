import React from 'react';
import '../styles/form-title.scss';
import FormIcon from "../icons/FormIcon";

const defaultClass = 'user-forms-title';

export const FormTitle = () => {

    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__icon-container`}>
                <FormIcon />
            </div>
            <b>Formularios</b>
        </div>
    );
};
