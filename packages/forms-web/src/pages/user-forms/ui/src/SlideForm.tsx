import React, {useState} from 'react';
import '../styles/slide-form.scss';
import FormIcon from "../icons/FormIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import {FormUseCase} from "./FormUseCase";

const defaultClass = 'slide-form';
interface SlideFormProps {
    formName:string
}
export const SlideForm = ({formName}:SlideFormProps) => {

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
                    <FormUseCase formOption="Opcion1" statusOption="Hecho"/>
                    <FormUseCase formOption="Opcion2" statusOption="Pendiente"/>
                    <FormUseCase formOption="Opcion3" statusOption="Proceso"/>
                </>
            }
        </div>
    );
};