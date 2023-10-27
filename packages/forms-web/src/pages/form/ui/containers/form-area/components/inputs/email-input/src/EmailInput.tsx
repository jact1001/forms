import { IEmail } from '../../../../../../../data/domain/IFormFields';
import '../styles/email-input.scss';
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';

const defaultClass = 'form-email-input';

interface EmailInputProps {
    field: IEmail;
    sectionId: string;
}

export const EmailInput = ({ field, sectionId }:EmailInputProps) => {

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
        <input 
            type={ field.type } 
            className={ `${defaultClass}` }
            placeholder={ field.placeholder } 
            value={ field.value }
            onChange={ handleOnChange }
        />
    )
}
