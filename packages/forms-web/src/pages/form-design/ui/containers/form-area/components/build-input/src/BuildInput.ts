import React from "react";
import { IFields } from "../../../../../../data/domain/IFormFields";
import { TextInput } from "../../text-input/src/TextInput";
import { TextArea } from "../../text-area/src/TextArea";
import { Radio } from "../../radio/src/Radio";
import { Checkbox } from "../../checkbox/src/Checkbox";
import { Select } from "../../select/src/Select";
import { NumberInput } from "../../number-input/src/NumberInput";
import { EmailInput } from "../../email-input/src/EmailInput";
import { DateInput } from "../../date-input/src/DateInput";
import { TimeInput } from "../../time-input/src/TimeInput";

interface IInputsType {
    [key: string]: (props: IFields) => React.ReactElement;
}

export const inputsType: IInputsType = {
    text: TextInput,
    textArea: TextArea,
    radio: Radio,
    checkbox: Checkbox,
    select: Select,
    number: NumberInput,
    email: EmailInput,
    date: DateInput,
    time: TimeInput
}
