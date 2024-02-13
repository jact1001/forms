import { INumber } from '../../../../../../../data/domain/IFormFields';
import '../styles/number-input.scss';
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';

const defaultClass = 'form-use-case-number-input';

interface NumberInputProps {
    field: INumber;
    sectionId: string;
}

export const NumberInput = ({ field, sectionId }: NumberInputProps) => {

    const dispatch = useDispatch();

    const handleOnChange = ({ target: {value} }: ChangeEvent<HTMLInputElement>) => {
        updateStoreField(value);
    }

    const updateStoreField = (value:string) => {
        const newField = {
            ...field,
            value
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    return (
        <div className={`${defaultClass}`}>
            <input
                type={ field.type }
                className={ `${defaultClass}__text` }
                placeholder={ field.placeholder }
                min={ field.min }
                value={ field.value }
                onChange={ handleOnChange }
                required
            />
            <span className={`${defaultClass}__line`}/>
        </div>
    )
}
