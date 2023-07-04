import React, {useState} from 'react';
import '../styles/user-forms.scss';
import FormIcon from "../icons/FormIcon";
import ReturnIcon from "../icons/ReturnIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";

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
                    <div className={`${defaultClass}__slide`}>
                        <div className={`${defaultClass}__content`}>
                            <div  className={`${defaultClass}__name-icon`}>
                                <div className={`${defaultClass}__icon`}>
                                    <FormIcon />
                                </div>
                                <div className={`${defaultClass}__name`}>
                                    <b>Form 1</b>
                                </div>
                            </div>
                            <div className=" slide-button-container">
                                <div  className={`${defaultClass}__slide-button`}>
                                    <button  className={`${defaultClass}__arrow-button`} onClick={toggleCount}>
                                        <div className={isArrowRotated ? `${defaultClass}__arrow-up` : ""}>
                                            <ArrowDownIcon />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={optionsClassName}>
                            <a href="#">Opción 1</a>
                            <div className="button-option-container">
                                <button className={`${defaultClass}__button-option`}>
                                    <ArrowUpRightIcon/>
                                </button>
                            </div>
                        </div>
                        <div className={optionsClassName}>
                            <a href="#">Opción 2</a>
                            <div className="button-option-container">
                                <button  className={`${defaultClass}__button-option`}>
                                    <ArrowUpRightIcon/>
                                </button>
                            </div>
                        </div>
                        <div className={optionsClassName}>
                            <a href="#">Opción 3</a>
                            <div className="button-option-container">
                                <button  className={`${defaultClass}__button-option`}>
                                    <ArrowUpRightIcon/>
                                </button>
                            </div>
                        </div>
                    </div>
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