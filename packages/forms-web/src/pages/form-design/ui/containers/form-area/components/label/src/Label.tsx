import '../styles/label.scss';
import { useDispatch } from 'react-redux';
import { updateSectionField } from '../../../../../../data/state/effects/form.effect';

import { useState } from 'react';

const defaultClass = 'label';
const labelText = 'Escribe aquí el nombre de tu campo';

export const Label = ( {field}: any) => {

    const { type, label } = field; 
    const [text, setText] = useState(label);
    const dispatch = useDispatch();

    const updateStoreField = () => {
        const newField = {
            ...field,
            label: text
        }
        dispatch(updateSectionField(newField));
    }
    
    // evento cuando cambia el input
    const handleOnChange = ({ target }: any) => {
        setText(target.value);
    }
    
    // console.log('onChange', text);

    // evento cuando un elemento pierde el foco
    const handleOnBlur = ({target}: any) => {
        updateStoreField();
        console.log('onBlur', target.value);
    }

    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__input-line`} >
                <input
                    type='text'
                    className={`${defaultClass}__label-text`}
                    placeholder={ labelText }
                    value={text}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                />
                <span className={`${defaultClass}__line`}></span>
            </div>
        </div>
    )

}
