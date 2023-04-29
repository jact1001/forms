import React from 'react';
import back from '../../../../../../assets/Icon_Back.svg';
import forward from '../../../../../../assets/Icon_Forward.svg';
import './form-title.scss';

const TITLE_VALUE = 'Titulo';
const defaultClassName = 'form-title';

export const FormTitle = () => {

    return (
        <div className={defaultClassName}>
            <h1>{TITLE_VALUE}</h1>
            <div>
                <a className=""><img src={back} alt="add" className={`${defaultClassName}__icon`}/></a>
                <a className=""><img src={forward} alt="add" className={`${defaultClassName}__icon`}/></a>
            </div>
        </div>
    )
}
