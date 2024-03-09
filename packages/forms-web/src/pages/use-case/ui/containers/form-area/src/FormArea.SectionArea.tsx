import React from "react";
import { Label } from "../components/label/src/Label";
import '../styles/section-area.scss';
import { TFields } from "../../../../data/domain/IUseCase";
import { inputsType } from "../components/build-input/src/BuildInput";

const defaultClass = 'form-use-case-section-area';

interface ISectionArea {
    fields:TFields;
    sectionId: string;
}

export const SectionArea = ({fields, sectionId}:ISectionArea) => {

    return (
        <div className={defaultClass} >
            {fields?.map((field)=>{
                const Input = inputsType[`${field.type}`];
                return Input &&
                    <div className={`${defaultClass}__field-container`} >
                        <Label label={field.label} />
                        <Input key={field.form_field_id} field={field} sectionId={sectionId} />
                    </div>
            })}
        </div>
    );
}
