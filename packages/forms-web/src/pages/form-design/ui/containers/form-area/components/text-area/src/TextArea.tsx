import React from 'react';
import '../styles/text-area.scss';

const defaultClass = 'text-input';

export const TextArea = ({label, textArea}: any) => {

    // const {row, key, col} = label;

    return (
        <div className={ `${defaultClass}` }>
            <label>{label}</label>
            <textarea {...textArea} />
        </div>

    )
}
