import { IDate } from '../../../../../../../data/domain/IFormFields';
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import DateIcon from '../../../icons/date-icon';
import '../styles/date-input.scss';

const defaultClass = 'form-use-case-date-input';

interface DateInputProps {
    field: IDate;
    sectionId: string;
}

export const DateInput = ({ field, sectionId }: DateInputProps) => {

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
