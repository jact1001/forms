import React from "react";
//import { IField } from "../../../../../../data/domain/IFormFields";
import { TextInput } from "../../inputs/text-input/src/TextInput";
import { TextArea } from "../../inputs/text-area/src/TextArea";
import { Radio } from "../../inputs/radio/src/Radio";
import { Checkbox } from "../../inputs/checkbox/src/Checkbox";
import { Select } from "../../inputs/select/src/Select";
import { NumberInput } from "../../inputs/number-input/src/NumberInput";
import { EmailInput } from "../../inputs/email-input/src/EmailInput";
import { DateInput } from "../../inputs/date-input/src/DateInput";
import { TimeInput } from "../../inputs/time-input/src/TimeInput";


interface IInputsType {
    [key: string]: (props: any) => React.ReactElement;
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
