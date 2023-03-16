import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useCustomTypedSelector } from '../../../../hooks/custom-typed-selector';
import { findField } from '../../../../redux/effects/field.effect';
import logo from '../../../../assets/Logo_FA.svg';
import './fields-menu.scss';
import { DragTextInput } from "../drag-text-input/drag-text-input";

export const FieldsMenu = () => {

    const dispatch = useDispatch();
    const {fieldForms, loading, error} = useCustomTypedSelector((state: any) => state.fieldForms);

    const findFieldComponent = () => {
        dispatch(findField());
    }

    useEffect(() => {
        findFieldComponent();
    }, []);

    interface IDragInputs {
        [key: string]: (props: any) => React.ReactElement;
    }

    const dragInputs: IDragInputs = {
        text: DragTextInput,
        number: DragTextInput,
    };

    // Pruebas
    console.log('Data: ', fieldForms);

    return (
        <div className="fa-field-menu">
            <img src={logo} alt="logo" className="fa-field-menu__logo" />
            {fieldForms && fieldForms.fields.map(({type, ...field}: any) => {
                const DragInput = dragInputs[`${type}`];
                return DragInput ? <DragInput {...field} /> : <></>;
            })}
        </div>
    )
}
