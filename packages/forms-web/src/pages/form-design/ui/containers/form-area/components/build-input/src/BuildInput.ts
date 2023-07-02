import React from "react";
import {IFields, TFields} from "../../../../../../data/domain/IFormFields";
import { TextInput } from "../../text-input/src/TextInput";
import { TextArea } from "../../text-area/src/TextArea";
import { Radio } from "../../radio/src/Radio";
import { Checkbox } from "../../checkbox/src/Checkbox";

interface IInputsType {
    [key: string]: (props: IFields) => React.ReactElement;
}

export const inputsType: IInputsType = {
    text: TextInput,
    textArea: TextArea,
    radio: Radio,
    checkbox: Checkbox
}
