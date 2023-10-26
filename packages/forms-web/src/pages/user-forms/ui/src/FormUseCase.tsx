import React from 'react';
import '../styles/form-use-case.scss';
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import {StatusUseCase} from "./StatusUseCase";
import { IFormCase } from "../../data/domain/IUserForms";

const defaultClass = 'form-use-case';
interface SlideFormProps {
    formCase: IFormCase;
    formId: string;
}
export const FormUseCase = ({ formCase: {name, state, id}, formId }: SlideFormProps) =>  {

    const openCase = () => {
        const domain = window.location.origin;
        const url = `${domain}/form/${formId}/${id}`;
        window.open(url, '_blank');
    }

    return (
        <div className={`${defaultClass}__button-content`}>
            <button onClick={openCase} className={`${defaultClass}__button-option`}>
                <div className={`${defaultClass}__name-status-container`}>
                    <b className={`${defaultClass}__name-status`}>{name}</b>
                    <StatusUseCase statusCase={state}/>
                </div>
                <ArrowUpRightIcon/>
            </button>
        </div>
    );
};
