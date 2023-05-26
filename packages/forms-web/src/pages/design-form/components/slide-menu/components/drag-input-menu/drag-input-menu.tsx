// agregado 
// import { ItemTypes } from '../../../drag-drop/item-types';
// import { useDrag } from 'react-dnd';

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

    // // constante de arrastre
    // const [{ isDragging }, drag] = useDrag(() => ({
    //     type: ItemTypes.DRAGINPUT,
    //     collect: monitor => ({
    //         isDragging: !!monitor.isDragging(),
    //     }),
    // }))

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