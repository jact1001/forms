import React, {useEffect} from 'react';
import '../styles/forms.scss';
import { Header } from "../../../header/src/Header";
import { useDispatch } from "react-redux";
import { FormTitle } from "./FormTitle";
import FormArea from "../containers/form-area/src/FormArea";
import { findUseCase } from "../../data/state/effects/form.effects";
import { useFormStore } from "../../data/hooks/custom-typed-selector";
import {useParams} from "react-router-dom";
import { FooterButtons } from '../containers/footer-buttons/src/FooterButtons';
import { ToastContainer } from 'react-toastify';

const defaultClass = 'forms-container';

interface RouteParams {
    caseId: string;
}

export const Form = () => {

    const dispatch = useDispatch();
    const { form, loading, error } = useFormStore((state) => state.form);
    console.log("form: ",form); // Borrar console log
    const { caseId } = useParams<RouteParams>();

    useEffect(() => {
        dispatch(findUseCase(caseId));
    }, []);

    return (
        <>
            <Header />
            <div className={`${defaultClass}`}>
                    <FormTitle formName={form?.form_name}/>
                    <FormArea sections={form?.sections}/>
                    <FooterButtons />
                    <ToastContainer />
                </div>

        </>

    );
};
