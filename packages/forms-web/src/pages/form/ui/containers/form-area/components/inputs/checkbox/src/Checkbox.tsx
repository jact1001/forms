import {ICheckbox, IOptionValue} from "../../../../../../../data/domain/IFormFields";
import '../styles/checkbox.scss';
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

const defaultClass = 'form-checkbox-group';

interface CheckboxProps {
    field: ICheckbox;
    sectionId: string;
}

export const Checkbox = ({field, sectionId}:CheckboxProps) => {

    const dispatch = useDispatch();

    const {type, field_id, options, values}= field;

    const handleOnChange = ({ target: {value, checked} }: ChangeEvent<HTMLInputElement>) => {

        if(checked){
            const newValue=options.find((option)=>option.id===value)||options[0];
            const newVal=values.find((val)=>val.id===value)||values[0];
            updateStoreField(newValue);
            updateStoreField(newVal);
        } else {
            const newValue=values.filter((option)=>option.id!==value)||values[0];
            updateStoreField2(newValue);
        }

    }

    const updateStoreField = (value:IOptionValue) => {
        const newField = {
            ...field,
            value
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    const updateStoreField2 = (values:IOptionValue[]) => {
        const newField = {
            ...field,
            values
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    return (
        <div className={`${defaultClass}`}>
            {options.map((option)=>{
                return (
                    <div className={`${defaultClass}__options-container`}>
                        <label htmlFor={field_id+option.id} className={`${defaultClass}__label`}>
                            <input
                                type={ type }
                                className={`${defaultClass}__checkbox`}
                                id={ field_id + option.id }
                                name={ field_id }
                                value={ option.id }
                                onChange={ handleOnChange }
                            />{ option.text }
                        </label>
                    </div>
                )
            })}
        </div>
    )

}
