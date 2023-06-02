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

    //console.log('fieldForms', fieldForms);

    return (
        <div>
            { fieldForms && fieldForms.fields.map(( field: any ) => {
                return <DragInput key={ field.field_id } data={ field } />;
            })}
        </div>
    )
}
