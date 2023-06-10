import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDesignFormStore } from '../../../../data/hooks/custom-typed-selector';
import { findField } from '../../../../data/state/effects/field.effect';
import { DragInput } from "../components/drag-input/src/drag-input";

export const SlideMenuDragInputs = () => {

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
            { formFields && formFields?.fields.map(( field: any ) => {
                return <DragInput key={ field.field_id } data={ field } />;
            })}
        </div>
    )
}
