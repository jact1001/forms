import IconClose from '../../icons/icon-close';
import '../styles/radio.scss';
import AddIcon from "../../icons/icon-add";
import {useDispatch} from "react-redux";
import {updateSectionField} from "../../../../../../data/state/effects/form.effect";

const defaultClass = 'radio-group';

export const Radio = (field: any) => {

    const { type, options } = field;
    const dispatch = useDispatch();

    const updateStoreField = () => {
        const newField = {
            ...field,
            options
        }
        dispatch(updateSectionField(newField));
    }

    const addOption = () => {
        options.push({
            label: '',
            id: options.length + 1
        })
        updateStoreField();
    }

    const removeOption = (position: number) => {
        options.splice(position, 1);
        updateStoreField();
    }

    return (
        <>
            {options.map((option: any, index: number) => {
                return (
                    <div className={defaultClass}>
                        <input type={type} id={option.id} name={option.label} className={`${defaultClass}__radio`} disabled />
                        <div className={`${defaultClass}__label`}>
                            <div className={`${defaultClass}__input-line`}>
                                <input
                                    type='text'
                                    className={`${defaultClass}__input-text`}
                                    placeholder={option.label}
                                    value={option.label}
                                />
                                <span className={`${defaultClass}__line`}></span>
                            </div>
                            <div onClick={() => removeOption(index)}><IconClose /></div>
                        </div>
                    </div>
                )
            })}
            <div onClick={addOption}>Añade otra opción <AddIcon /></div>
        </>
    )
}
