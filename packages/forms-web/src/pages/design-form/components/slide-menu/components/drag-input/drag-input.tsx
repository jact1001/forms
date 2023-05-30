import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../drag-drop/item-types';
import IconText from '../icons/icon-text';
import IconTextArea from '../icons/icon-text-area';
import IconRadio from '../icons/icon-radio';
import IconCheckbox from '../icons/icon-checkbox';
import IconSelect from '../icons/icon-select';
import IconNumber from '../icons/icon-number';
import IconDate from '../icons/icon-date';
import IconTime from '../icons/icon-time';
import IconEmail from "../icons/icon-email";
import { IIcon } from "../../../../interfaces/IIcon";
import './drag-input.scss';

interface IIconType {
    [key: string]: (props: IIcon) => React.ReactElement;
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

const defaultClassName = 'drag-input';


export const DragInput = ({text, iconType}: IDragInput) => {

    const Icon = iconsType[`${iconType}`];

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.DRAGINPUT,
        item: 'test-item',
        end(item, monitor){
            const dropResult = monitor.getDropResult() as any;
            console.log(item);
            console.log(dropResult);
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <button className={`${defaultClassName}`} ref={drag}>
            { Icon ? <Icon /> : <></>}
            <h1 className={`${defaultClassName}__title`}>{ text }</h1>
        </button>
    )
}
