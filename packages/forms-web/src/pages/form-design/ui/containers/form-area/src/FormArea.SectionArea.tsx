import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { addSectionField } from "../../../../data/state/effects/form.effect";
import '../styles/section-area.scss';
import { Label } from "../components/label/src/Label";
import { v4 as uuidv4 } from 'uuid';
import { inputsType } from "../components/build-input/src/BuildInput";
import '../styles/section-area.scss';
import { TFields } from "../../../../data/domain/IForm";

const defaultClass = 'section-area';

export const DRAG_INPUT = 'drag-input';

interface SectionAreaProps {
    sectionFields: TFields;
    sectionId: string;
}

export const SectionArea = ({sectionFields, sectionId}: SectionAreaProps) => {

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
        dispatch(addSectionField(newField, sectionId));
    };

    return (
        <div className={defaultClass} ref={ drop }>
            {sectionFields.map((field: any) => {
                const Input = inputsType[`${field.type}`];
                return Input &&
                    <div className={`${defaultClass}__field-container`} >
                        <Label field={field} sectionId={sectionId} />
                        <Input key={field.label} {...field}/>
                    </div>
            })}
        </div>
    );
}
