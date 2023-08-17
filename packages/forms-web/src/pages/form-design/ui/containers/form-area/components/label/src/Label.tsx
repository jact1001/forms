import { useState } from 'react';
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { updateSectionField } from '../../../../../../data/state/effects/form.effect';
import { TField } from "../../../../../../data/domain/IFormFields";
import '../styles/label.scss';

const defaultClass = 'label';

interface LabelProps {
    field: TField;
    sectionId: string;
}

export const Label = ( {field, sectionId}: LabelProps) => {

    const { label_placeholder } = field;
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const updateStoreField = () => {
        const newField = {
            ...field,
            label: text
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    const handleOnChange = ({ target: {value} }: ChangeEvent<HTMLInputElement>) => {
        setText(value);
    }

    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__input-line`} >
                <input
                    type='text'
                    className={`${defaultClass}__label-text`}
                    placeholder={label_placeholder}
                    value={text}
                    onChange={handleOnChange}
                    onBlur={updateStoreField}
                />
                <span className={`${defaultClass}__line`}/>
            </div>
        </div>
    )

}
