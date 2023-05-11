import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCustomTypedSelector } from '../../../../../../hooks/custom-typed-selector';
import { findField } from '../../../../../../redux/effects/field.effect';
import { DragInput } from "../drag-input/drag-input";

export const DragInputMenu = () => {

    const dispatch = useDispatch();
    const { fieldForms } = useCustomTypedSelector((state: any) => state.fieldForms);

    const findFieldComponent = () => {
        dispatch(findField());
    }

    useEffect(() => {
        findFieldComponent();
    }, []);

    return (
        <div>
            {fieldForms && fieldForms.fields.map(({ type, field_id, label }: any) => {
                return <DragInput key={field_id} text={label} iconType={type} />;
            })}
        </div>
    )
}