import AddIcon from '../../icons/add-icon';
import CloseIcon from '../../icons/close-icon';
import { useDispatch } from 'react-redux';
import { updateSectionField } from '../../../../../../data/state/effects/form.effect';
import '../styles/checkbox.scss';

const defaultClass = 'checkbox-group';

export const Checkbox = (field: any) => {

    const { type, options } = field;
    const dispatch = useDispatch();

    // añadir el label 
    const updateStoreField = () => {
        const newField = {
            ...field,
            options
        }
        dispatch(updateSectionField(newField));
    }

    const addOption = () => {
        options.push({
            id: options.length + 1,
            label: `Opción ${options.length + 1}`
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
                        <input
                            className={`${defaultClass}__checkbox`}
                            type={type}
                            id={option.id}
                            name={option.label}
                            disabled
                        />
                        <div className={`${defaultClass}__label`}>
                            <div className={`${defaultClass}__label__input-line`} >
                                <input
                                    className={`${defaultClass}__label__input-text`}
                                    type='text'
                                    placeholder={option.label}
                                    value={option.label}
                                />
                                <span className={`${defaultClass}__label__line`}></span>
                            </div>
                            <div className={ `${defaultClass}__icon` } onClick={() => removeOption(index)}><CloseIcon /></div>
                        </div>
                    </div>
                )
            })}
            <div className={ `${defaultClass}__icon` } onClick={addOption}>Añade otra opción <AddIcon /></div>
        </>
    )
}

