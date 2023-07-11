import React, {useState} from 'react';
import '../styles/form-use-case.scss';
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import {StatusUseCase} from "./StatusUseCase";

const defaultClass = 'slide-form-option';
interface SlideFormProps {
    formOption:string
}
export const FormUseCase = ({formOption}:SlideFormProps) => {
    return (
        <div className={`${defaultClass}__button-content`}>
            <button className={`${defaultClass}__button-option`}>
                <b>{formOption}</b>
                <StatusUseCase formOption="Hecho"/>
                <ArrowUpRightIcon/>
            </button>
        </div>
    );
};