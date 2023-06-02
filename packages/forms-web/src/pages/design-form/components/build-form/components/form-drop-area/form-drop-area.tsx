import { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../drag-drop/item-types";
import './form-drop-area.scss';

export const FormDropArea = () => {

    const [form, setForm] = useState([]);

    // const [ drop ] = useDrop(
    //     () => ({
    //         accept: ItemTypes.DRAGINPUT,
    //         drop: () => ({name: `Dustbin`}),
    //         collect: (monitor: any) => {
    //             // isOver: monitor.isOver();
    //             console.log('monitor', monitor);
    //             const dropResult = monitor.getDropResult() as any;
    //             console.log('result', dropResult)
    //         },
    //     }),
    // );

    const [ {isOver}, drop ] = useDrop(() => ({
        accept: ItemTypes.DRAGINPUT,

        drop: (field) => addField(field),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()           
        }),
    }));

    const addField = (field: any) => {
        console.log('field drop', field);
        // setForm((field) => form.push(field));
        //form.push(field);
    };

    console.log('Form drop', form);

    return (
        <div ref={ drop } className="drop-area">
            <h1>This Drop Area</h1>
            <p>{  }</p>
        </div>
    )
}
