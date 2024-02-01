import React from 'react';
import '../styles/forms-title.scss';

const defaultClass = 'forms-title';

interface IFormTitle {
    formName?: string;
    caseName: string;
}

export const FormTitle = ({formName, caseName}:IFormTitle) => {

    return (
            <div className={`${defaultClass}__title`}>
                <b>{formName}</b>
                <p>{caseName}</p>
            </div>
    );
};
