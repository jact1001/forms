import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useCustomTypedSelector } from '../../../../hooks/custom-typed-selector';
import { findField } from '../../../../redux/effects/field.effect';
import logo from '../../../../assets/Logo_FA.svg';
import './fields-menu.scss';
import { DragTextInput } from "../drag-text-input/drag-text-input";

export const FieldsMenu = () => {

    const dispatch = useDispatch();
    const {fields, loading, error} = useCustomTypedSelector((state: any) => state.fields);

    const findFieldComponent = () => {
        dispatch(findField());
    }

    useEffect(() => {
        findFieldComponent();
    }, []);

    console.log(fields);

    interface IDragInputs {
        [key: string]: (props: any) => React.ReactElement;
    }

    const dragInputs: IDragInputs = {
        text: DragTextInput,
        number: DragTextInput,
    };

    return (
        <div className="fa-field-menu">
            <img src={logo} alt="logo" className="fa-field-menu__logo" />
            {fields && fields.test.map(({type, ...field}: any) => {
                const DragInput = dragInputs[`${type}`];
                return DragInput ? <DragInput {...field} /> : <></>;
            })}
        </div>
    )
}
