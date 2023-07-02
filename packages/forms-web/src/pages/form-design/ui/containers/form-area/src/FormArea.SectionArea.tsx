import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { addSectionField } from "../../../../data/state/effects/form.effect";
import '../styles/section-area.scss';
import { Label } from "../components/label/src/Label";
import { v4 as uuidv4 } from 'uuid';
import { useDesignFormStore } from "../../../../data/hooks/custom-typed-selector";
import { inputsType } from "../components/build-input/src/BuildInput";
import '../styles/section-area.scss';

const defaultClass = 'section-area';

export const DRAG_INPUT = 'drag-input';

export const SectionArea = () => {

    const { sections } = useDesignFormStore((state) => state.form.form);
    const formFields = sections[0].fields;
    const dispatch = useDispatch();

    const [ {isOver}, drop ] = useDrop(() => ({
        accept: DRAG_INPUT,
        drop: (field) => addField(field),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
    }));

    const addField = (field: any) => {
        const newField = {
            ...field,
            form_field_id: uuidv4()
        }
        dispatch(addSectionField(newField));
    };

    return (
        <div className={defaultClass} ref={ drop }>
            {formFields.map((field: any) => {
                const Input = inputsType[`${field.type}`];
                return Input &&
                    <div className={`${defaultClass}__field-container`} >
                        <Label field={field} />
                        <Input key={field.label} {...field}></Input>
                    </div>
            })}
        </div>
    );
}
