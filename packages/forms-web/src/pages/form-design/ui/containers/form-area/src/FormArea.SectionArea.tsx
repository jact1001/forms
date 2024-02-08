import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import {addSectionField, removeSectionField} from "../../../../data/state/effects/form.effect";
import { Label } from "../components/label/src/Label";
import { v4 as uuidv4 } from 'uuid';
import { inputsType } from "../components/build-input/src/BuildInput";
import { TFields } from "../../../../data/domain/IForm";
import { Delete } from '../components/options/src/Delete';
import '../styles/section-area.scss';

const defaultClass = 'section-area';

export const DRAG_INPUT = 'drag-input';

interface SectionAreaProps {
    sectionFields: TFields;
    sectionId: string;
}

export const SectionArea = ({sectionFields, sectionId}: SectionAreaProps) => {

    const dispatch = useDispatch();
    const [ {}, drop ] = useDrop(() => ({
        accept: DRAG_INPUT,
        drop: (field) => addField(field),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        }),
    }));

    const addField = (field: any) => {
        const newField = {
            ...JSON.parse(JSON.stringify(field)),
            form_field_id: uuidv4()
        }
        dispatch(addSectionField(newField, sectionId));
    };

    const removeField = (fieldId: string) => {
        dispatch(removeSectionField(fieldId, sectionId));
    }

    return (
        <div className={defaultClass} ref={ drop }>
            {sectionFields.map((field: any) => {
                const Input = inputsType[`${field.type}`];
                return Input &&
                    <div className={`${defaultClass}__field-container`} >
                        <Label field={field} sectionId={sectionId} />
                        <Input key={field.form_field_id} sectionId={sectionId} {...field}/>
                        {sectionFields.length > 1 && <Delete onClick={() => removeField(field.form_field_id)} />}
                    </div>
            })}
            {sectionFields.length === 0 && <h4>Arrastra tus campos aquí...</h4>}
        </div>
    );
}
