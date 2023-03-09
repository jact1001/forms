import {useDispatch} from 'react-redux';
import React, { useState, useEffect } from 'react';
import {useCustomTypedSelector} from "../../hooks/custom-typed-selector";
import {findForm} from "../../redux/effects/form.effects";

export const Hola = () => {

    const dispatch = useDispatch();
    const {form, loading, error} = useCustomTypedSelector((state: any) => state.form);

    const findFormComponent = () => {
        dispatch(findForm());
    }

    useEffect(() => {
        findFormComponent();
    }, []);

    //console.log(form);
    //console.log(loading);

    return <h1>Hola mundo!</h1>;
    
}