import React from 'react';
import '../styles/text-input.scss';

const defaultClass = 'text-input';

export const TextInput = ({type, label, placeholder}: any) => {

    const titleInput = 'Añade tu pregunta';

    return (
        <div>
            <label><input type="text" value="Añade tu pregunta" className={ `${defaultClass}` } /></label><br/>
            <input placeholder={ placeholder } className={ `${defaultClass}` } disabled/>
            <div className='line-input'>
                <input type='text' name='Nombre' placeholder='Escribe aquí' />

            </div>
        </div>
    )
}
