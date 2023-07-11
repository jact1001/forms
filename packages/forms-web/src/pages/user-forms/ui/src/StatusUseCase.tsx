import React, {useState} from 'react';
import '../styles/status-use-case.scss';
import StatusCaseIcon from "../icons/StatusCaseIcon";

const defaultClass = 'status-use-case';
let imageCase;
let color;
interface SlideFormProps {
    formOption:string
}

export const StatusUseCase = ({formOption}:SlideFormProps) => {

    if (formOption === "Hecho") {
        imageCase = <StatusCaseIcon/>;
    } else if (formOption === "Pendiente") {
        imageCase = <StatusCaseIcon/>;
    } else if (formOption === "Proceso") {
        imageCase = <StatusCaseIcon/>;
    } else {
        // Valor predeterminado si formOption no coincide con ninguna opción conocida
        imageCase = <StatusCaseIcon/>;
    }

    return (
        <div className={`${defaultClass}__container`}>
            {imageCase}
            <b>{formOption}</b>
        </div>
    );
};