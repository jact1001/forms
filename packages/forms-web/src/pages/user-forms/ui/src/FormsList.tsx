import React, {useState} from 'react';
import '../styles/form-list.scss';
import {Form} from "./Form";


const defaultClass = 'form-list';

export const FormsList = () => {
    const mockForms = [
        {
            "id": "0001",
            "form_name": "Formulario 1",
            "cases": [
                {
                    "case_name": "estudio de suelos Carlos",
                    "case_id": "0001",
                    "url": "https://www.form.com/{formId}/{userId}/{caseId}",
                    "status": {
                        "id": "pending",
                        "name": "Pendiente"
                    }
                }
            ]
        },
        {
            "form_id": "0002",
            "form_name": "Formulario 2",
            "cases": [
                {
                    "case_name": "estudio de suelos Juan",
                    "case_id": "0001",
                    "url": "https://www.form.com/{formId}/{userId}/{caseId}",
                    "status": {
                        "id": "inProgress",
                        "name": "En progreso"
                    }
                }
            ]
        }
    ]

    return (

        <div className={`${defaultClass}__main`}>
            {
                mockForms.map((form)=>{
                    return <Form formName={form.form_name} formCases={form.cases}/>
                })
            }
        </div>
    );
};