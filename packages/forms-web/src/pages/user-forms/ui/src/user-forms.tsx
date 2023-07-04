import React, {useState} from 'react';
import '../styles/user-forms.scss';
import FormIcon from "../icons/FormIcon";
import ReturnIcon from "../icons/ReturnIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import {SlideForm} from "./SlideForm";

const defaultClass = 'forms-user-container';

export const Userforms = () => {

    const [optionsClassName, setOptionsClassName] = useState("forms-user-container__button-content");
    const [isArrowRotated, setIsArrowRotated] = useState(false)
    const toggleCount = () => {
        setIsArrowRotated(!isArrowRotated);
        setOptionsClassName(optionsClassName === "forms-user-container__button-content" ? "forms-user-container__button-content--show" : "forms-user-container__button-content");
    };

    return (
        <div className={`${defaultClass}`}>
            <div className={`${defaultClass}__forms-container`}>
                <div className={`${defaultClass}__tittle`}>
                    <FormIcon />
                    <b>Mis Formularios</b>
                </div>
                <div className={`${defaultClass}__main`}>
                    <SlideForm formName="Form1"/>
                    <SlideForm formName="Form2"/>
                    <SlideForm formName="Form3"/>
                </div>
            </div>
            <div className={`${defaultClass}__return-container`}>
                <div className={`${defaultClass}__return-button-container`}>
                    <button className={`${defaultClass}__return-button`}><ReturnIcon /></button>
                    <b className={`${defaultClass}__return-button-title`}>VOLVER</b>
                </div>
            </div>
        </div>
    );
};