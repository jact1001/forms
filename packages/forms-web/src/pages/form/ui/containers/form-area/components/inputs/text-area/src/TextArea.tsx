import { ITextArea } from '../../../../../../../data/domain/IFormFields';
import '../styles/text-area.scss';
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';

const defaultClass = 'form-text-area';

interface TextAreaProps {
    field: ITextArea;
    sectionId: string;
}

export const TextArea = ({field, sectionId}:TextAreaProps) => {

    const dispatch = useDispatch();

    const handleOnChange = ({ target: {value} }: ChangeEvent<HTMLTextAreaElement>) => {
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
        <textarea 
            className={ `${defaultClass}` } 
            placeholder={ field.placeholder } 
            value={ field.value } 
            onChange={handleOnChange}
        />
    )
}
