import React from 'react';
import '../styles/status-use-case.scss';
import StatusCaseIcon from "../icons/StatusCaseIcon";

const defaultClass = 'status-use-case';

interface SlideFormProps {
    statusCase: {
        id: string;
        name: string;
    }
}

export const StatusUseCase = ({ statusCase }: SlideFormProps) => {
    let imageCase;

    if (statusCase.id === "done") {
        imageCase = <StatusCaseIcon className={`${defaultClass}__green-icon`}/>;
    } else if (statusCase.id === "inProgress") {
        imageCase = <StatusCaseIcon className={`${defaultClass}__yellow-icon`}/>;
    } else if (statusCase.id === "pending") {
        imageCase = <StatusCaseIcon className={`${defaultClass}__red-icon`}/>;
    } else {
        imageCase = <StatusCaseIcon className={`${defaultClass}__green-icon`}/>;
    }

    return (
        <div className={`${defaultClass}__container`}>
            {imageCase}
            <b>{statusCase.name}</b>
        </div>
    );
};