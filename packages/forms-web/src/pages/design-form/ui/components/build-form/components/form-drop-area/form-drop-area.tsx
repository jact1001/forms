import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../drag-drop/item-types";
import './form-drop-area.scss';

export const FormDropArea = () => {

    const [form, setForm] = useState<any>([]);

    const [ {isOver}, drop ] = useDrop(() => ({
        accept: ItemTypes.DRAGINPUT,
        drop: (field) => addField(field),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
    }));

    const addField = (field: any) => {
        // console.log('field drop', field);
        form.push(field);
        setForm(form);
    };

    console.log('form drop', form);

    return (
        <div ref={ drop } className="drop-area">
            <h1>This Drop Area</h1>
            <p>{  }</p>
        </div>
    )
}
