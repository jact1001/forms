import React, {useState} from 'react';
import '../styles/drop-down.scss';
import FormIcon from "../icons/FormIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import {FormUseCase} from "./FormUseCase";

const defaultClass = 'slide-form';
interface FormCase{
    case_name: string;
    case_id: string;
    url: string;
    status: {
        id: string ;
        name: string;
    }
}
interface SlideFormProps {
    formName: string
    formCases: FormCase[]
}
export const Form = ({formName, formCases}:SlideFormProps) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const toggleCount = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__content`}>
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
            </div>
            {isExpanded &&
                <>
                    {formCases.map((formCase)=>{
                        return <FormUseCase formOption={formCase.case_name} statusOption={formCase.status}/>
                    })}
                </>
            }
        </div>
    );
};