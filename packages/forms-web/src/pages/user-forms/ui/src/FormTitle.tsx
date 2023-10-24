import React from 'react';
import '../styles/form-title.scss';
import FormIcon from "../icons/FormIcon";

const defaultClass = 'form-title';

export const FormTitle = () => {

    return (
        <div className={`${defaultClass}__container`}>
            <div className={`${defaultClass}__title`}>
                <div className={`${defaultClass}__icon-container`}>
                    <FormIcon />
                </div>
                <b>Mis Formularios</b>
            </div>
        </div>
    );
};