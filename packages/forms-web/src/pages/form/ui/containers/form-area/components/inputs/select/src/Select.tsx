import { ISelect } from "../../../../../../../data/domain/IFormFields";
import '../styles/select.scss';
import { updateSectionField } from "../../../../../../../data/state/effects/form.effects";
import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

const defaultClass = 'form-select-group';

interface ISelectProps {
    field: ISelect;
    sectionId: string;
}

export const Select = ({field, sectionId}: ISelectProps) => {

    const dispatch = useDispatch();

    const {field_id, values}= field;

    const handleOnChange = ({ target: {value} }: ChangeEvent<HTMLSelectElement>) => {
        const newValue=values.find((option)=>option.text===value)?.text||values[0].text;
        updateStoreField(newValue);
    }

    const updateStoreField = (value:string) => {
        const newField = {
            ...field,
            value
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    return (
    <>
        <div >
            <select 
                id={ field_id }
                className={`${defaultClass}`} 
                onChange={ handleOnChange }
            >
                {values.map((value) => {
                return (
                    <option 
                        value={value.text}  
                    >
                    {value.text}
                    </option>
                )
        })}
        </select>
        </div>
    </>
    )
}
