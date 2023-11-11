import React, {useState} from 'react';
import '../styles/form.scss';
import FormIcon from "../icons/FormIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { FormUseCase } from "./FormUseCase";
import { IFormCase, IUserForm } from "../../data/domain/IUserForms";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUseCase } from "../../data/state/effects/user-forms.effects";

const defaultClass = 'form';

export const Form = ({ form_name, cases, form_id }:IUserForm) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleCount = () => {
        setIsExpanded(!isExpanded);
    };

    const editHandler = () => {
        history.push(`form-design/${form_id}`)
    }

    const createCase = () => {
        const newUseCase: IFormCase = {
            name: `caso - ${cases?.length ? (cases?.length + 1) : 1}`,
            state: {id: 'pending', name: 'Pendiente'}
        }
        dispatch(addUseCase(newUseCase, form_id));
    }

    return (
        <div className={defaultClass}>

            <button className={`${defaultClass}__arrow-button`} onClick={toggleCount}>
                <div className={`${defaultClass}__name-icon`}>
                    <div className={`${defaultClass}__icon`}>
                        <FormIcon/>
                    </div>
                    <div className={`${defaultClass}__name`}>
                        <b>{form_name}</b>
                    </div>
                </div>
                <div className={`${defaultClass}__actions-container`}>
                    <button className={`${defaultClass}__action-button`} onClick={editHandler} >Editar formulario</button>
                    <button className={`${defaultClass}__action-button`} onClick={createCase} >Crear caso</button>
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
