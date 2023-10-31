import '../styles/footer-buttons.scss';
import { useDispatch } from "react-redux";

import { updateUseCase } from "../../../../data/state/effects/form.effects";
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import { useFormStore } from '../../../../data/hooks/custom-typed-selector';
import { validateForm } from '../../../../data/use-cases/use-validate-form';


const defaultClass = 'form-use-case-footer-buttons';

export const FooterButtons = () => {

    const dispatch = useDispatch();

    const [isSaving, setIsSaving] = useState(false);
    const history = useHistory();
    const { form, updateLoading, updateError  } = useFormStore((state) => state.form);

    useEffect(() => {
        if (isSaving && !updateLoading) {
            if (updateError) {
                toast.error("Error en la operación");
            } else if (form.id) {
                toast.success("Operación exitosa");
            }
            setIsSaving(false);
        }
    }, [isSaving, updateLoading, updateError, form.id, history]);

    const handleSaveForm = () => {
        dispatch(updateUseCase(form));
        console.log("actualiza el form:", form);
        setIsSaving(true);
    }

    const disabledButton = () => {
        return updateLoading;
    }

    return (
        <div className={defaultClass}>
            <button disabled={disabledButton()} onClick={ handleSaveForm }>Guardar</button>
        </div>
    )
}
