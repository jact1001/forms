import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useCustomTypedSelector } from '../../../../../hooks/custom-typed-selector';
import { findField } from '../../../../../redux/effects/field.effect';
import { FormTitle } from '../components/form-title/form-title';
import { DragTextInput } from "../components/drag-text-input/drag-text-input";
import logo from '../../../../../assets/Logo_FA.svg';
import add from '../../../../../assets/Icon_Add.svg';

import '../styles/fields-menu.scss';

export const FieldsMenu = () => {

    const dispatch = useDispatch();
    const { fieldForms } = useCustomTypedSelector((state: any) => state.fieldForms);

    const findFieldComponent = () => {
        dispatch(findField());
    }

    useEffect(() => {
        findFieldComponent();
    }, []);

    return (
        <div className="fa-field-menu">

            <img src={logo} alt="logo" className="fa-field-menu__logo" />
            <FormTitle />

            <div className='fa-field-menu__title'>
                <a className="">
                    <img src={add} alt="add" className="fa-field-menu__icon-add" />
                    Añadir
                </a>
            </div>

            {fieldForms && fieldForms.fields.map(({type, field_id, label}: any) => {
                return <DragTextInput key={field_id} text={label} iconType={type} />;
            })}

        </div>
    )
}
