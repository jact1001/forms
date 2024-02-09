import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/form-list.scss';
import { Form } from "./Form";
import { useUserFormsStore } from "../../data/hooks/custom-typed-selector";

const defaultClass = 'form-list';

export const FormsList = () => {

    const { userForms } = useUserFormsStore((state) => state.userForms);

    return (

        <div className={`${defaultClass}__main`}>
            {
                userForms?.forms?.map((form)=>{
                    return <Form {...form}/>
                })
            }
            {
                (!userForms || userForms?.forms.length === 0) &&
                <p>
                    Aún no tienes formularios, puedes crearlo en
                    <Link to="/form-design">Diseña tu formulario</Link>
                </p>
            }
        </div>
    );
};
