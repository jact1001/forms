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
import { IIcon } from "../../../../ui/interfaces/IIcon";
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

export const DragInput = ({data}: any) => {

    const Icon = iconsType[`${data.type}`];

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.DRAGINPUT,
        item: data,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult() as any;

            // pruebas
            console.log('item', item);
            console.log('dropResult', dropResult);
            if (item && dropResult) {
                alert(`You dropped ${item.label} into ${dropResult}!`)
            }

        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
            handlerId: monitor.getHandlerId()
        }),
    }));

    return (
        <button ref={ drag } className={ `${defaultClassName}` }>
            { Icon ? <Icon /> : <></> }
            <h1 className={ `${defaultClassName}__title` }>{ data.label }</h1>
        </button>
    )
}
