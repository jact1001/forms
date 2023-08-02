import React from 'react';
import '../styles/form-use-case.scss';
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import {StatusUseCase} from "./StatusUseCase";

const defaultClass = 'form-use-case';
interface SlideFormProps {
    formName:string
    statusOption: {
        id: string;
        name: string;
    }
}
export const FormUseCase = ({ formName, statusOption }: SlideFormProps) =>  {
    return (
        <div className={`${defaultClass}__button-content`}>
            <button className={`${defaultClass}__button-option`}>
                <div className={`${defaultClass}__name-status-container`}>
                    <b className={`${defaultClass}__name-status`}>{formName}</b>
                    <StatusUseCase statusCase={statusOption}/>
                </div>
                <ArrowUpRightIcon/>
            </button>
        </div>
    );
};