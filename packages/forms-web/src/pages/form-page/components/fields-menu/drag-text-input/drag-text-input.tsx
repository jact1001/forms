import React from 'react';
import IconSelect from '../../../../../assets/icon-select';
import './drag-text-input.scss';

interface IDragTextInput {
    text: string,
    iconType: string
}

interface IIconType {
    [key: string]: (props: any) => React.ReactElement;
}

const IconsType: IIconType = {
    textIcon: IconSelect 
}

export const DragTextInput = ({text, iconType}: IDragTextInput) => {

    const Icon = IconsType[`${iconType}`];

    return (
        <button className="fa-field-menu button btn-effect">
            {
                Icon?
                <Icon  className='fa-field-menu__icon' /> : <></>
            }
            <h1 className="fa-field-menu__h1">{ text }</h1>
        </button>
    )
}
