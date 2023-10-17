import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { Label } from "../components/label/src/Label";
import { v4 as uuidv4 } from 'uuid';
import '../styles/section-area.scss';
import { TextInput } from "../components/inputs/text-input/src/TextInput";
import { TextArea } from "../components/inputs/text-area/src/TextArea";
import { Radio } from "../components/inputs/radio/src/Radio";
import { TimeInput } from "../components/inputs/time-input/src/TimeInput";
import { TFields } from "../../../../data/domain/IForm";
import { inputsType } from "../components/build-input/src/BuildInput";

const defaultClass = 'section-area';

interface ISectionArea {
    fields:TFields;
}

export const SectionArea = ({fields}:ISectionArea) => {

    return (
        <div className={defaultClass} >
            {fields.map((field)=>{
                const Input = inputsType[`${field.type}`];
                return Input &&
                    <div className={`${defaultClass}__field-container`} >
                        <Label label={field.label} />
                        <Input key={field.label} {...field} />
                    </div>
            })}
        </div>
    );
}
