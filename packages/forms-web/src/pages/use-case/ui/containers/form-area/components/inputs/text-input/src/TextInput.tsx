import { IText } from "../../../../../../../data/domain/IFormFields";
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import '../styles/text-input.scss';
import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';

const defaultClass = 'form-use-case-text-input';

interface ITextInput {
    field: IText;
    sectionId: string;
}

export const TextInput = ({field, sectionId}: ITextInput) => {

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
                type={field.type}
                className={`${defaultClass}__text`}
                placeholder={field.placeholder}
                value={field.value}
                onChange={handleOnChange}
                required
            />
            <span className={`${defaultClass}__line`}/>
        </div>

    )
}
