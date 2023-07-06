import React, {useState} from 'react';
import '../styles/slide-form-option.scss';
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";

const defaultClass = 'slide-form-option';
interface SlideFormProps {
    formOption:string
}
export const SlideFormOption = ({formOption}:SlideFormProps) => {
    return (
        <div className={`${defaultClass}__button-content`}>
            <button className={`${defaultClass}__button-option`}>
                <b>{formOption}</b>
                <ArrowUpRightIcon/>
            </button>
        </div>
    );
};