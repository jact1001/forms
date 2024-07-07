import React, { useState } from 'react';
import '../styles/form.scss';
import FormIcon from "../icons/FormIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { FormUseCase } from "./FormUseCase";
import { IUserForm } from "../../data/domain/IUserForms";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUseCase, downloadUserForm } from "../../data/state/effects/user-forms.effects";
import { ICase } from "../../data/domain/ICase";
import { useUserFormsStore } from "../../data/hooks/custom-typed-selector";

const defaultClass = 'form';

export const Form = ({ form_name, cases, form_id, is_author }:IUserForm) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { createUseCaseLoading } = useUserFormsStore((state) => state.userForms);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleCount = () => {
        setIsExpanded(!isExpanded);
    };

    const editHandler = () => {
        history.push(`form-design/${form_id}`)
    }

    const download = (event: any) => {
        event.stopPropagation();
        dispatch(downloadUserForm(form_id));
    }

    const getDate = () => {
        const newDate = new Date();
        const dateFormat = new Intl.DateTimeFormat('es-CO', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        return dateFormat.format(newDate);
    }

    const createCase = (event: any) => {
        event.stopPropagation();
        const newUseCase: ICase = {
            case_name: `caso - ${cases?.length ? (cases?.length + 1) : 1} (${getDate()})`,
            form_id: form_id
        }
        dispatch(addUseCase(newUseCase));
        setIsExpanded(true);
    }

    return (
        <div className={defaultClass}>

            <button className={`${defaultClass}__arrow-button`} onClick={toggleCount}>
                <div className={`${defaultClass}__name-icon`} >
                    <div className={`${defaultClass}__icon`}>
                        <FormIcon/>
                    </div>
                    <div className={`${defaultClass}__name`}>
                        <b>{form_name}</b>
                    </div>
                </div>
                <div className={`${defaultClass}__actions-container`}>
                    <button className={`${defaultClass}__action-button`} onClick={download} disabled={!is_author} >Descargar casos</button>
                    <button className={`${defaultClass}__action-button`} onClick={editHandler} disabled={!is_author} >Editar formulario</button>
                    <button className={`${defaultClass}__action-button`} onClick={createCase} disabled={createUseCaseLoading}>Crear caso</button>
                    <div className={isExpanded ? `${defaultClass}__arrow-up` : `${defaultClass}__arrow-down`}>
                        <ArrowDownIcon/>
                    </div>
                </div>
            </button>
            {isExpanded &&
                <>
                    {cases?.map((formCase)=>{
                        return <FormUseCase {...formCase} />
                    })}
                </>
            }
        </div>
    );
};
