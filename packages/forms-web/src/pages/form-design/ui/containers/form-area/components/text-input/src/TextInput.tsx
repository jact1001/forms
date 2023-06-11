import React from 'react';
import '../styles/text-input.scss';

const defaultClass = 'text-input';

export const TextInput = ({label}: any) => {

    return (
        <div className={ `${defaultClass}` }>
            <label>{label}</label>
            <input/>
        </div>

    )
}
