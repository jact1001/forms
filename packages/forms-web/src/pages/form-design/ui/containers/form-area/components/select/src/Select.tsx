import AddIcon from '../../icons/add-icon';
import CloseIcon from '../../icons/close-icon';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSectionField } from '../../../../../../data/state/effects/form.effect';
import '../styles/select.scss';

const defaultClass = 'select-group';
const labelValue = 'Ejemplo';

export const Select = (field: any) => {

    const { type, values } = field; 
    const [options, setOptions] = useState(values);
    // const [text, setText] = useState(labelValue);
    const dispatch = useDispatch();

    const updateStoreField = () => {
        const newField = {
            ...field,
            values: options
        }
        dispatch(updateSectionField(newField));
    }

    const handleOnChange = ({ value }: any, index: number) => {
        
        let newOptions = [...options];
        newOptions[index].text = value;
        console.log('Options', newOptions);
        console.log('Value', value);
        
        setOptions(() => newOptions);
    }

    const handleOnBlur = ({value}: any, index: number) => {
        values[index].text = value;
        updateStoreField();
    }

    const addValue = () => {
        options.push({
            id: `0${values.length + 1}`,
            text: `Ejemplo ${values.length + 1}`
        })
        updateStoreField();
    }

    const removeValue = (position: number) => {
        options.splice(position, 1);
        updateStoreField();
    }

    

    return (
        <>
            {options.map((option: any, index: number) => {
                return (
                    <div className={defaultClass}>
                        <div className={`${defaultClass}__label`}>
                            <div className={`${defaultClass}__label__input-line`}>
                                {`${index + 1}. `}
                                <input
                                    className={`${defaultClass}__label__input-text`}
                                    type='text'
                                    placeholder={option.text}
                                    value={option.text}
                                    onChange={({target}) => handleOnChange(target, index)}
                                    onBlur={({target}) => handleOnBlur(target, index)}
                                />
                                <span className={`${defaultClass}__label__line`}></span>
                            </div>
                            <div className={ `${defaultClass}__icon` } onClick={() => removeValue(index)}><CloseIcon /></div>
                        </div>
                    </div>
                )
            })}
            <div className={ `${defaultClass}__icon` } onClick={addValue}>Añade otra opción <AddIcon /></div>
        </>
    )
}