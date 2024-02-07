import React, { useEffect } from 'react';
import '../styles/user-forms.scss';
import { FormTitle } from "./FormTitle";
import { FormsList } from "./FormsList";
import { Redirect } from "react-router-dom";
import { Header } from "../../../../components/header/src/Header";
import { useDispatch } from "react-redux";
import { findUserForms } from "../../data/state/effects/user-forms.effects";

const defaultClass = 'user-forms-container';

export const UserForms = () => {

    const isAuthenticated = sessionStorage.getItem('session');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findUserForms());
    }, [dispatch]);

    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Header />
            <div className={`${defaultClass}`}>
                <div className={`${defaultClass}__forms-container`}>
                    <FormTitle/>
                    <FormsList/>
                </div>
            </div>
        </>

    );
};
