import '../styles/footer-buttons.scss';
import { useDispatch } from "react-redux";
import { saveForm } from "../../../../data/state/effects/form.effect";
import { useDesignFormStore } from "../../../../data/hooks/custom-typed-selector";
import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import { validateForm } from "../../../../data/use-cases/use-validate-form";

const defaultClass = 'footer-buttons';

export const FooterButtons = () => {

    const dispatch = useDispatch();
    // @ts-ignore
    const { formId } = useParams();
    const [isSaving, setIsSaving] = useState(false);
    const history = useHistory();
    const { form, saveLoading: loading, saveError: error } = useDesignFormStore((state) => state.form);

    useEffect(() => {
        if (isSaving && !loading) {
            if (error) {
                toast.error("Error en la operación");
            } else if (form.id) {
                toast.success("Operación exitosa");
                history.push(`/form-design/${form.id}`);
            }
            setIsSaving(false);
        }
    }, [isSaving, loading, error, form.id, history]);

    const handleSaveForm = () => {
        dispatch(saveForm(form, formId));
        setIsSaving(true);
    }

    const disabledButton = () => {
        return !validateForm(form) || loading;
    }

    return (
        <div className={defaultClass}>
            <button disabled={disabledButton()} onClick={handleSaveForm}>Guardar</button>
        </div>
    )
}
