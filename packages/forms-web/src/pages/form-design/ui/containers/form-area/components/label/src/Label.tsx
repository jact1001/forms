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
    const dispatch = useDispatch();

    const handleOnChange = ({ target: {value} }: ChangeEvent<HTMLInputElement>) => {
        const newField = {
            ...field,
            label: value
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__input-line`} >
                <input
                    type='text'
                    className={`${defaultClass}__label-text`}
                    placeholder={label_placeholder}
                    value={field.label}
                    onChange={handleOnChange}
                />
                <span className={`${defaultClass}__line`}/>
            </div>
        </div>
    )

}
