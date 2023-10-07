import React from 'react';
import '../styles/form-list.scss';
import { Form } from "./Form";
import { useUserFormsStore } from "../../data/hooks/custom-typed-selector";

const defaultClass = 'form-list';

export const FormsList = () => {

    const { userForms } = useUserFormsStore((state) => state.userForms);

    return (

        <div className={`${defaultClass}__main`}>
            {
                userForms?.forms.map((form)=>{
                    return <Form {...form}/>
                })
            }
        </div>
    );
};
