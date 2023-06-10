import { useState } from "react";
import { useDrop } from "react-dnd";
import '../styles/drop-area.scss';

const defaultClass = 'drop-area';

export const DRAG_INPUT = 'drag-input';

export const FormAreaDropArea = () => {

    const [form, setForm] = useState<any>([]);

    const [ {isOver}, drop ] = useDrop(() => ({
        accept: DRAG_INPUT,
        drop: (field) => addField(field),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
    }));

    const addField = (field: any) => {
        form.push(field);
        setForm(form);
    };

    return (
        <div ref={ drop } className={defaultClass}>
        </div>
    )
}
