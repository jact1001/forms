import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { TextInput } from "../components/text-input/src/TextInput";
import { TextArea } from "../components/text-area/src/TextArea";
import { Radio } from "../components/radio/src/Radio";
import { Checkbox } from "../components/checkbox/src/Checkbox";
import { useDispatch } from "react-redux";
import { updateFieldForm } from "../../../../data/state/effects/form.effect";
import '../styles/drop-area.scss';

const defaultClass = 'drop-area';

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

export const FormAreaDropArea = () => {

    const [formFields, setFormFields] = useState<any>([]);
    const dispatch = useDispatch();

    const [ {isOver}, drop ] = useDrop(() => ({
        accept: DRAG_INPUT,
        drop: (field) => addField(field),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
    }));

    const addField = (field: any) => {
        formFields.push(field);
        dispatch(updateFieldForm(field));
        setFormFields(formFields);
    };

    return (
        <div ref={ drop } className={defaultClass}>
            {formFields.map((field: any) => {
                const Input = inputsType[`${field.type}`];
                return Input ? <Input key={field.label} {...field}></Input> : <></>
            })}
        </div>
    );
}
