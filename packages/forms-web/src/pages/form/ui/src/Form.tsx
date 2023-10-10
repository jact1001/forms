import React, {useState} from 'react';
import '../styles/form.scss';


const defaultClass = 'form';

export const Form = () => {

    return (
        <div className={defaultClass}>
            Hola mundo
            <div className={`${defaultClass}__field-container`}>
            <input type="text" placeholder="Escribe Nombre" disabled></input>
            <input type="text" placeholder="Escribe Nombre"></input>
            </div>
        </div>
    );
};
