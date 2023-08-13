import AddIcon from '../../../icons/add-icon';
import CloseIcon from '../../../icons/close-icon';
import React, {ChangeEvent, FocusEvent, useState} from 'react';
import { useDispatch } from 'react-redux';
import { updateSectionField } from '../../../../../../../data/state/effects/form.effect';
import { IOptionValue, ISelect } from "../../../../../../../data/domain/IFormFields";
import '../styles/select.scss';

const defaultClass = 'select-group';

interface ISelectProps extends ISelect {
    sectionId?: string;
}

export const Select = ({sectionId = '0', ...fileProps}: ISelectProps) => {

    const { values, option_placeholder } = fileProps;
    const [options, setOptions] = useState(values);
    const dispatch = useDispatch();

    const updateStoreField = () => {
        const newField = {
            ...fileProps,
            values: options
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    const handleOnChange = ({target: {value}}: ChangeEvent<HTMLInputElement>, index: number) => {
        let newOptions = [...options];
        newOptions[index].text = value;
        setOptions(() => newOptions);
    }

    const handleOnBlur = ({target: {value}}: FocusEvent<HTMLInputElement>, index: number) => {
        values[index].text = value;
        updateStoreField();
    }

    const addValue = () => {
        options.push({
            id: `0${values.length + 1}`,
            text: ''
        })
        updateStoreField();
    }

    const removeValue = (position: number) => {
        options.splice(position, 1);
        updateStoreField();
    }

    return (
        <>
            <div className={`${defaultClass}__options-container`}>
                {options.map((option: IOptionValue, index: number) => {
                    return (
                        <div className={defaultClass}>
                            <div className={`${defaultClass}__label`}>
                                <div className={`${defaultClass}__label__input-line`}>
                                    {`${index + 1}. `}
                                    <input
                                        className={`${defaultClass}__label__input-text`}
                                        type='text'
                                        placeholder={option_placeholder}
                                        value={option.text}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChange(event, index)}
                                        onBlur={(event: FocusEvent<HTMLInputElement>) => handleOnBlur(event, index)}
                                    />
                                    <span className={`${defaultClass}__label__line`}/>
                                </div>
                                {index > 0 && <div className={ `${defaultClass}__icon` } onClick={() => removeValue(index)}><CloseIcon /></div>}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={ `${defaultClass}__icon` } onClick={addValue}>Añade otra opción <AddIcon /></div>
        </>
    )
}
