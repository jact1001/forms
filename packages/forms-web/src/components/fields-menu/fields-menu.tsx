import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useCustomTypedSelector } from '../../hooks/custom-typed-selector';
import { findField } from '../../redux/effects/field.effect';
import logo from '../../assets/Logo_FA.svg';
import iconSelect from '../../assets/Icon_Select.svg';
import './fields-menu.scss';

export const FieldsMenu = () => {

    const dispatch = useDispatch();
    const {field, loading, error} = useCustomTypedSelector((state: any) => state.field);

    const findFieldComponent = () => {
        dispatch(findField());
    }

    useEffect(() => {
        findFieldComponent();
    }, []);

    console.log('Form App');
    console.log(field);

    return (
        <div className="fa-field-menu">
            <img src={logo} alt="logo" className="fa-field-menu__logo" />

            <button className="fa-field-menu button btn-effect" >
                <img src={iconSelect} alt="logo" className="fa-field-menu__icon" />
                <h1 className="fa-field-menu__h1">INPUT</h1>
            </button>
        </div>
    )
}