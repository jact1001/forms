import AddIcon from '../../../icons/add-icon';
import CloseIcon from '../../../icons/close-icon';
import React, { ChangeEvent, FocusEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSectionField } from '../../../../../../../data/state/effects/form.effect';
import {ICheckbox, IOptionValue} from "../../../../../../../data/domain/IFormFields";
import '../styles/checkbox.scss';

const defaultClass = 'checkbox-group';

interface ICheckboxProps extends ICheckbox {
    sectionId?: string
}

export const Checkbox = ({sectionId = '0', ...fieldProps}: ICheckboxProps) => {

    const { type, options, option_placeholder } = fieldProps;
    const [values, setValues] = useState(options);
    const dispatch = useDispatch();

    const updateStoreField = () => {
        const newField = {
            ...fieldProps,
            options: values
        }
        dispatch(updateSectionField(newField, sectionId));
    }

    const updateNewValues = (index: number, value: string) => {
        let newValues = [...values];
        newValues[index].text = value;
        setValues(() => newValues);
    }

    const handleOnChange = ({target: {value}}: ChangeEvent<HTMLInputElement>, index: number) => {
        updateNewValues(index, value);
    }

    const handleOnBlur = ({ target: {value} }: FocusEvent<HTMLInputElement>, index: number) => {
        updateNewValues(index, value);
        updateStoreField();
    }

    const addOption = () => {
        values.push({
            id: `0${options.length + 1}`,
            text: ''
        })
        updateStoreField();
    }

    const removeOption = (position: number) => {
        values.splice(position, 1);
        updateStoreField();
    }

    return (
        <>
            <div className={`${defaultClass}__options-container`}>
                {values.map((value: IOptionValue, index: number) => {
                    return (
                        <div className={defaultClass}>
                            <input
                                className={`${defaultClass}__checkbox`}
                                type={type}
                                id={value.id}
                                name={value.text}
                                disabled
                            />
                            <div className={`${defaultClass}__label`}>
                                <div className={`${defaultClass}__label__input-line`} >
                                    <input
                                        className={`${defaultClass}__label__input-text`}
                                        type='text'
                                        placeholder={option_placeholder}
                                        value={value.text}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleOnChange(event, index)}
                                        onBlur={(event: FocusEvent<HTMLInputElement>) => handleOnBlur(event, index)}
                                    />
                                    <span className={`${defaultClass}__label__line`}/>
                                </div>
                                {index > 0 && <div className={ `${defaultClass}__icon` } onClick={() => removeOption(index)}><CloseIcon /></div> }
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={ `${defaultClass}__icon` } onClick={addOption}>Añade otra opción <AddIcon /></div>
        </>
    )
}
