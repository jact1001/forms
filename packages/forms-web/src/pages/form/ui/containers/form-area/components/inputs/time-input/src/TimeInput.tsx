import '../styles/time-input.scss';
import { ITime } from '../../../../../../../data/domain/IFormFields';
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import TimeIcon from '../../../icons/time-icon';

const defaultClass = 'form-use-case-time-input';

interface TimeInputProps {
    field: ITime;
    sectionId: string;
}

export const TimeInput = ({field, sectionId}:TimeInputProps) => {

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
                value={ field.value }
                onChange={ handleOnChange }
                required
            />
            <span className={`${defaultClass}__line`}/>
        </div>
    )
}
