import React from 'react';
import '../styles/form-use-case.scss';
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import {StatusUseCase} from "./StatusUseCase";
import { IFormCase } from "../../data/domain/IUserForms";

const defaultClass = 'form-use-case';
interface SlideFormProps extends IFormCase {}

export const FormUseCase = ({name, state, id, case_creator }: SlideFormProps) =>  {

    const openCase = () => {
        const domain = window.location.origin;
        const url = `${domain}/form/${id}`;
        window.open(url, '_blank');
    }

    return (
        <div className={`${defaultClass}__button-content`}>
            <button onClick={openCase} className={`${defaultClass}__button-option`}>
                <div className={`${defaultClass}__name-status-container`}>
                    <b className={`${defaultClass}__name-status`}>{name} <span className={`${defaultClass}__creator`}>{case_creator?.split('@')[0]}</span></b>
                    <StatusUseCase statusCase={state}/>
                </div>
                <ArrowUpRightIcon/>
            </button>
        </div>
    );
};
