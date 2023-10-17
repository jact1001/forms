import React, {useState} from 'react';
import '../styles/form.scss';
import { Header } from "../../../header/src/Header";
import { HeadUserForm } from "./HeadUserForm";
import { FormTitle } from "./FormTitle";
import FormArea from "../containers/form-area/src/FormArea";

const defaultClass = 'form-container';

export const Form = () => {

    return (
        <>
            <Header />
            <div className={`${defaultClass}`}>
                <HeadUserForm/>
                <div className={`${defaultClass}__forms-container`}>
                    <FormTitle/>
                    <FormArea/>
                </div>
            </div>
        </>
        
    );
};
