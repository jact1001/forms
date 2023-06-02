import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDesignFormStore } from '../../../../data/hooks/custom-typed-selector';
import { findField } from '../../../../data/state/effects/field.effect';
import { DragInput } from "../drag-input/drag-input";

export const DragInputMenu = () => {

    const dispatch = useDispatch();
    const { formFields } = useDesignFormStore((state) => state.formFields);

    const findFieldComponent = () => {
        dispatch(findField());
    }

    useEffect(() => {
        findFieldComponent();
    }, []);

    return (
        <div>
            { formFields && formFields?.fields.map(({ field_id, ...arg }: any) => {
                return <DragInput key={ field_id } data={ arg } />;
            })}
        </div>
    )
}
