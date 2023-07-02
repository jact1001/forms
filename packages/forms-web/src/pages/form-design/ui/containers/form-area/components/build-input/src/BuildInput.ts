import React from "react";
import { IFields } from "../../../../../../data/domain/IFormFields";
import { TextInput } from "../../text-input/src/TextInput";
import { TextArea } from "../../text-area/src/TextArea";
import { Radio } from "../../radio/src/Radio";
import { Checkbox } from "../../checkbox/src/Checkbox";
import { Select } from "../../select/src/Select";

interface IInputsType {
    [key: string]: (props: IFields) => React.ReactElement;
}

export const inputsType: IInputsType = {
    text: TextInput,
    textArea: TextArea,
    radio: Radio,
    checkbox: Checkbox,
    select: Select
}
