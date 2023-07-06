import React, {useState} from 'react';
import '../styles/slide-forms-container.scss';
import {SlideForm} from "./SlideForm";


const defaultClass = 'slide-forms-container';

export const SlideFormsContainer = () => {

    return (

        <div className={`${defaultClass}__main`}>
            <SlideForm formName="Form1"/>
            <SlideForm formName="Form2"/>
            <SlideForm formName="Form3"/>
        </div>
    );
};