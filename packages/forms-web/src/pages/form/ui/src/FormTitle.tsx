import React, {useState} from 'react';
import '../styles/forms-title.scss';
//import FormIcon from "../icons/FormIcon";

const defaultClass = 'forms-title';

interface IFormTitle {formName?: string}

export const FormTitle = ({formName}:IFormTitle) => {

    return (
            <div className={`${defaultClass}__title`}>
                <b>{formName}</b>
            </div>
    );
};