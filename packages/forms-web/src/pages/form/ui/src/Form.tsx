import React, {useState, useEffect} from 'react';
import '../styles/forms.scss';
import { Header } from "../../../header/src/Header";
import { useDispatch } from "react-redux";
import { FormTitle } from "./FormTitle";
import FormArea from "../containers/form-area/src/FormArea";
import { findForm } from "../../data/state/effects/form.effects";
import { useFormStore } from "../../data/hooks/custom-typed-selector";

const defaultClass = 'forms-container';

export const Form = () => {

    const dispatch = useDispatch();
    const { form, loading, error } = useFormStore((state) => state.form);

    console.log("form: ",form);

    useEffect(() => {
        dispatch(findForm());
    }, []);

    return (
        <>
            <Header />
            <div className={`${defaultClass}`}>
                    <FormTitle formName={form?.form_name}/>
                    <FormArea sections={form?.sections}/>
                </div>

        </>
        
    );
};
