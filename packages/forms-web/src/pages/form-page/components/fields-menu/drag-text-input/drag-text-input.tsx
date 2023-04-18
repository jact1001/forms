import React from 'react';
import IconSelec from '../../../../../assets/Icon_Select.svg'; // no va
import IconText from '../../../../../assets/icon-text';
import IconTextArea from '../../../../../assets/icon-text-area';
import IconRadio from '../../../../../assets/icon-radio';
import IconCheckbox from '../../../../../assets/icon-checkbox';
import IconSelect from '../../../../../assets/icon-select';
import IconNumber from '../../../../../assets/icon-number';
import IconEmail from '../../../../../assets/icon-email';
import IconDate from '../../../../../assets/icon-date';
import IconTime from '../../../../../assets/icon-time';
import './drag-text-input.scss';

interface IIconType {
    [key: string]: (props: any) => React.ReactElement;
}

interface IDragInput {
    text: string,
    iconType: string
}

const iconsType: IIconType = {
    text: IconText,
    textArea: IconTextArea,
    radio: IconRadio,
    checkbox: IconCheckbox,
    select: IconSelect,
    number: IconNumber,
    email: IconEmail,
    date: IconDate,
    time: IconTime
}

export const DragTextInput = ({text, iconType}: IDragInput) => {

    const Icon = iconsType[`${iconType}`];
    console.log('text: ', text);
    console.log('drag: ', iconType)
    //console.log('id ', key);

    return (
        <button className="button btn-effect">
            {
                Icon?
                <Icon className='icon' /> : <></>
            }
            <h1 className="fa-field-menu__h1">{ text }</h1>
        </button>
    )
}
