import React, {useState} from 'react';
import '../styles/user-forms.scss';
import {ReturnButton} from "./ReturnButton";
import {FormTitle} from "./FormTitle";
import {FormsList} from "./FormsList";
import {HeadUserForm} from "./HeadUserForm";

const defaultClass = 'user-forms-container';


export const UserForms = () => {

    return (
        <div className={`${defaultClass}`}>
            <HeadUserForm/>
            <div className={`${defaultClass}__forms-container`}>
                <FormTitle/>
                <FormsList/>
            </div>
            <div className={`${defaultClass}__return-container`}>
                <ReturnButton/>
            </div>
        </div>
    );
};