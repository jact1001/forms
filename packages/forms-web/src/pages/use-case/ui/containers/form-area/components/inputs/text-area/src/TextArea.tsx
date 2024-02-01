import { ITextArea } from '../../../../../../../data/domain/IFormFields';
import '../styles/text-area.scss';
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';

const defaultClass = 'form-use-case-text-area';

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
        <div className={`${defaultClass}`}>
            <textarea
                className={ `${defaultClass}__text` }
                placeholder={ field.placeholder }
                value={ field.value }
                onChange={handleOnChange}
                required
            />
            <span className={`${defaultClass}__line`}/>
        </div>
    )
}
