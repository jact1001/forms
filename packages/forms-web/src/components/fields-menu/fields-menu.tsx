//import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './fields-menu.scss';
import logo from '../../assets/Logo_FA.svg';
import iconSelect from '../../assets/Icon_Select.svg';
//import searchIcon from '../../assets/ic_Search.png';
//import {findItems} from "../../redux/effects/items.effect";
// import {useDispatch} from 'react-redux';
// import {useHistory} from "react-router-dom";

export const FieldsMenu = () => {

    console.log('Form App');

    return (
        <div className="fa-field-menu">
            <img src={logo} alt="logo" className="fa-field-menu__logo" />

            <button className="fa-field-menu button btn-effect" >
                <img src={iconSelect} alt="logo" className="fa-field-menu__icon" />
                <h1 className="fa-field-menu__h1">INPUT</h1>
            </button>
        </div>
    )
}