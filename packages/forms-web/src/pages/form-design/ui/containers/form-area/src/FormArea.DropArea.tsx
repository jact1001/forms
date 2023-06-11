import React, { useState } from "react";
import { useDrop } from "react-dnd";
import '../styles/drop-area.scss';
import {TextInput} from "../components/text-input/src/TextInput";
import {TextArea} from "../components/text-area/src/TextArea";
import {useDispatch} from "react-redux";
import {updateFieldForm} from "../../../../data/state/effects/form.effect";

const defaultClass = 'drop-area';

export const DRAG_INPUT = 'drag-input';

interface IInputsType {
    [key: string]: (props: any) => React.ReactElement;
}

const inputsType: IInputsType = {
    text: TextInput,
    textArea: TextArea
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
