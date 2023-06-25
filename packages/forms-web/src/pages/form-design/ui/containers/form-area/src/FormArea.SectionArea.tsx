import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { TextInput } from "../components/text-input/src/TextInput";
import { TextArea } from "../components/text-area/src/TextArea";
import { Radio } from "../components/radio/src/Radio";
import { Checkbox } from "../components/checkbox/src/Checkbox";
import { useDispatch } from "react-redux";
import { addSectionField } from "../../../../data/state/effects/form.effect";
import '../styles/section-area.scss';
import {Label} from "../components/label/src/Label";
import { v4 as uuidv4 } from 'uuid';
import {useDesignFormStore} from "../../../../data/hooks/custom-typed-selector";

const defaultClass = 'section-area';

export const DRAG_INPUT = 'drag-input';

interface IInputsType {
    [key: string]: (props: any) => React.ReactElement;
}

const inputsType: IInputsType = {
    text: TextInput,
    textArea: TextArea,
    radio: Radio,
    checkbox: Checkbox
}

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
                        <Label />
                        <Input key={field.label} {...field}></Input>
                    </div>
            })}
        </div>
    );
}
