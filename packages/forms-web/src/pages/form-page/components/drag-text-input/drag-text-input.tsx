import React from 'react';
import iconSelect from '../../../../assets/Icon_Select.svg';
import './drag-text-input.scss';

export const DragTextInput = () => {

    return (
        <button className="fa-field-menu button btn-effect">
            <img src={iconSelect} alt="logo" className="fa-field-menu__icon"/>
            <h1 className="fa-field-menu__h1">INPUT</h1>
        </button>
    )
}
