import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSectionField } from '../../../../../../data/state/effects/form.effect';
import '../styles/label.scss';

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
    
    const handleOnChange = ({ target }: any) => {
        setText(target.value);
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
                    onBlur={updateStoreField}
                />
                <span className={`${defaultClass}__line`}></span>
            </div>
        </div>
    )

}
