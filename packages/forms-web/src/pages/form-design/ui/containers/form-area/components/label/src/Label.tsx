import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSectionField } from '../../../../../../data/state/effects/form.effect';
import '../styles/label.scss';
import {TField} from "../../../../../../data/domain/IFormFields";

const defaultClass = 'label';
const labelText = 'Escribe aquí el nombre de tu campo';

interface LabelProps {
    field: TField;
    sectionId: string;
}

export const Label = ( {field, sectionId}: LabelProps) => {

    const { label } = field;
    const [text, setText] = useState(labelText);
    const dispatch = useDispatch();

    const updateStoreField = () => {
        const newField = {
            ...field,
            label: text
        }
        dispatch(updateSectionField(newField, sectionId));
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
                    placeholder={ label }
                    value={text}
                    onChange={handleOnChange}
                    onBlur={updateStoreField}
                />
                <span className={`${defaultClass}__line`}/>
            </div>
        </div>
    )

}
