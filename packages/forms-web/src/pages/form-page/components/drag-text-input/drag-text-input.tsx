import React from 'react';
import {ReactComponent as IconSelect} from '../../../../assets/Icon_Select.svg';
import './drag-text-input.scss';

export const DragTextInput = () => {

    // const MenuIcon = (props) => (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} className={props.class}></svg>
    // )

    // const iconText = () => {
    //     <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //         <path style="fill:#282828;" d="M9,15h3.81l8.7-8.69a2.7,2.7,0,0,0,0-3.82,2.77,2.77,0,0,0-3.82,0L9,11.19Zm2-3,8.11-8.1a.69.69,0,0,1,1,0h0a.68.68,0,0,1,0,1L12,13H11Z"/>
    //         <path style="fill:#282828;" d="M20,19.07a.93.93,0,0,1-.93.93H4.93A.93.93,0,0,1,4,19.07V4.93A.93.93,0,0,1,4.93,4H15V2H4.93A2.93,2.93,0,0,0,2,4.93V19.07A2.93,2.93,0,0,0,4.93,22H19.07A2.93,2.93,0,0,0,22,19.07V10H20Z"/>
    //     </svg>
    // }
    // imagen a lado <H1>
    // <img src={iconSelect} alt="logo" className="fa-field-menu__icon" />

    return (
        <button className="fa-field-menu button btn-effect">
            <IconSelect className='fa-field-menu__icon' />
            <h1 className="fa-field-menu__h1">INPUT</h1>
        </button>
    )
}
