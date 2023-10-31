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

    const {type, field_id, options, value}= field;

    const handleOnChange = ({ target: {value:val, checked} }: ChangeEvent<HTMLInputElement>) => {
        if(checked){
            console.log("Dentro de if");
            const newValue=options.find((option)=>option.id===val)||options[0];
            console.log("newValue", newValue);
            value?.push(newValue);
            console.log("value", value);
            updateStoreField(value);
        } else {
            console.log("Dentro de else");
            const newValue=value.filter((option)=>option.id!==val)||value[0];
            console.log("newValue", newValue);
            updateStoreField(newValue);
        }
    }

    const updateStoreField = (value:IOptionValue[]) => {
        const newField = {
            ...field,
            value
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
