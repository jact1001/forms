import React, {useState} from 'react';
import '../styles/form-list.scss';
import {DropDown} from "./DropDown";


const defaultClass = 'slide-forms-container';

export const FormsList = () => {

    return (

        <div className={`${defaultClass}__main`}>
            <DropDown formName="Form1"/>
            <DropDown formName="Form2"/>
            <DropDown formName="Form3"/>
        </div>
    );
};