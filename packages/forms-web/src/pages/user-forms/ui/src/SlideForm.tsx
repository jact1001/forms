import React, {useState} from 'react';
import '../styles/slide-form.scss';
import FormIcon from "../icons/FormIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";
import {SlideFormOption} from "./SlideFormOption";

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
                    <SlideFormOption formOption="Opcion1"/>
                    <SlideFormOption formOption="Opcion2"/>
                    <SlideFormOption formOption="Opcion3"/>
                </>
            }
        </div>
    );
};