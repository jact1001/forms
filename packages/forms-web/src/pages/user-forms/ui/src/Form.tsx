import React, {useState} from 'react';
import '../styles/form.scss';
import FormIcon from "../icons/FormIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { FormUseCase } from "./FormUseCase";
import {IFormCase} from "../../data/domain/IUserForms";

const defaultClass = 'form';

interface SlideFormProps {
    formName: string
    formCases?: IFormCase[]
}

export const Form = ({formName, formCases}:SlideFormProps) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleCount = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={defaultClass}>

            <button className={`${defaultClass}__arrow-button`} onClick={toggleCount}>
                <div className={`${defaultClass}__name-icon`}>
                    <div className={`${defaultClass}__icon`}>
                        <FormIcon/>
                    </div>
                    <div className={`${defaultClass}__name`}>
                        <b>{formName}</b>
                    </div>
                </div>
                <div className={isExpanded ? `${defaultClass}__arrow-up` : ""}>
                    <ArrowDownIcon/>
                </div>
            </button>
            {isExpanded &&
                <>
                    {formCases?.map((formCase)=>{
                        return <FormUseCase formName={formCase.case_name} statusOption={formCase.state}/>
                    })}
                </>
            }
        </div>
    );
};
