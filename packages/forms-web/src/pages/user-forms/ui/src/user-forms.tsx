import React, {useState} from 'react';
import '../styles/user-forms.scss';
import {ReturnButton} from "./ReturnButton";
import {FormTitle} from "./FormTitle";
import {SlideFormsContainer} from "./SlideFormsContainer";
import {HeadUserForm} from "./HeadUserForm";

const defaultClass = 'user-forms-container';


export const Userforms = () => {

    return (
        <div className={`${defaultClass}`}>
            <HeadUserForm/>
            <div className={`${defaultClass}__forms-container`}>
                <FormTitle/>
                <SlideFormsContainer/>
            </div>
            <ReturnButton/>
        </div>
    );
};