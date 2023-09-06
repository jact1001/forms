import React, { useEffect } from 'react';
import '../styles/user-forms.scss';
import { FormTitle } from "./FormTitle";
import { FormsList } from "./FormsList";
import { HeadUserForm } from "./HeadUserForm";
import { useLoginStore } from "../../../login/data/hooks/custom-typed-selector";
import {Redirect, useHistory} from "react-router-dom";
import {Header} from "../../../header/src/Header";

const defaultClass = 'user-forms-container';

export const UserForms = () => {

    const isAuthenticated = sessionStorage.getItem('session');
    const { isLogin } = useLoginStore((state) => state.login);
    const history = useHistory();


    /*useEffect(() => {
        if (!isLogin) {
            history.push('/login');
        }
    }, [isLogin]);*/

    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Header />
            <div className={`${defaultClass}`}>
                <HeadUserForm/>
                <div className={`${defaultClass}__forms-container`}>
                    <FormTitle/>
                    <FormsList/>
                </div>
            </div>
        </>

    );
};
