import React, {useState} from 'react';
import '../styles/slide-form.scss';
import FormIcon from "../icons/FormIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowUpRightIcon from "../icons/ArrowUpRightIcon";

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
                <div className={`${defaultClass}__name-icon`}>
                    <div className={`${defaultClass}__icon`}>
                        <FormIcon/>
                    </div>
                    <div className={`${defaultClass}__name`}><b>{formName}</b>
                    </div>
                </div>
                <div>
                    <div className={`${defaultClass}__slide-button`}>
                        <button className={`${defaultClass}__arrow-button`} onClick={toggleCount}>
                            <div className={isExpanded ? `${defaultClass}__arrow-up` : ""}>
                                <ArrowDownIcon/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {isExpanded &&
                <>
                    <div className={`${defaultClass}__button-content`}>
                        <a href="#">Opción 1</a>
                        <div className="button-option-container">
                            <button className={`${defaultClass}__button-option`}>
                                <ArrowUpRightIcon/>
                            </button>
                        </div>
                    </div>
                    <div className={`${defaultClass}__button-content`}>
                        <a href="#">Opción 2</a>
                        <div className="button-option-container">
                            <button className={`${defaultClass}__button-option`}>
                                <ArrowUpRightIcon/>
                            </button>
                        </div>
                    </div>
                    <div className={`${defaultClass}__button-content`}>
                        <a href="#">Opción 3</a>
                        <div className="button-option-container">
                            <button className={`${defaultClass}__button-option`}>
                                <ArrowUpRightIcon/>
                            </button>
                        </div>
                    </div>
                </>
            }

        </div>
    );
};