import React from 'react';
import '../styles/status-use-case.scss';
import StatusCaseIcon from "../icons/StatusCaseIcon";

const defaultClass = 'status-use-case';
interface SlideFormProps {
    statusCase:string
}


export const StatusUseCase = ({ statusCase }: SlideFormProps) => {
    let imageCase;

    if (statusCase === "Hecho") {
        imageCase = <StatusCaseIcon className={`${defaultClass}__green-icon`}/>;
    } else if (statusCase === "Pendiente") {
        imageCase = <StatusCaseIcon className={`${defaultClass}__yellow-icon`}/>;
    } else if (statusCase === "Proceso") {
        imageCase = <StatusCaseIcon className={`${defaultClass}__red-icon`}/>;
    } else {
        imageCase = <StatusCaseIcon className={`${defaultClass}__green-icon`}/>;
    }

    return (
        <div className={`${defaultClass}__container`}>
            {imageCase}
            <b>{statusCase}</b>
        </div>
    );
};