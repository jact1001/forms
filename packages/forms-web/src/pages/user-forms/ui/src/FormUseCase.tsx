import React from 'react';
import '../styles/form-use-case.scss';
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import {StatusUseCase} from "./StatusUseCase";

const defaultClass = 'slide-form-option';
interface SlideFormProps {
    formOption:string
    statusOption:string
}
export const FormUseCase = ({ formOption, statusOption }: SlideFormProps) =>  {
    return (
        <div className={`${defaultClass}__button-content`}>
            <button className={`${defaultClass}__button-option`}>
                <b>{formOption}</b>
                <StatusUseCase statusCase={statusOption}/>
                <ArrowUpRightIcon/>
            </button>
        </div>
    );
};