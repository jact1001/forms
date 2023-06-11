import React from 'react';
import '../styles/text-area.scss';

const defaultClass = 'text-input';

export const TextArea = ({label}: any) => {

    return (
        <div className={ `${defaultClass}` }>
            <label>{label}</label>
            <textarea rows={4} cols={50} />
        </div>

    )
}
