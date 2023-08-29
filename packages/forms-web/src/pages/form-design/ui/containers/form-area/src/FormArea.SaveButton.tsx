import '../styles/save-button.scss';
import { useDispatch } from "react-redux";
import { saveForm } from "../../../../data/state/effects/form.effect";
import { useDesignFormStore } from "../../../../data/hooks/custom-typed-selector";
import { useHistory } from "react-router-dom";
import {useEffect} from "react";
import { toast } from 'react-toastify';
import { validateForm } from "../../../../data/use-cases/use-validate-form";

const defaultClass = 'save-button';

export const SaveButton = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const { form, loading, error } = useDesignFormStore((state) => state.form);

    useEffect(() => {
        if (!loading && !error && form.id) {
            toast.success("Operación exitosa");
            history.push(`/form-design/${form.id}`);
        }
        if (!loading && error){
            toast.error("Error en la operación");
        }
    }, [loading, error]);

    const handleSaveForm = () => {
        dispatch(saveForm(form));
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
