import '../styles/footer-buttons.scss';
import { useDispatch } from "react-redux";

import { updateUseCase } from "../../../../data/state/effects/form.effects";
import {useEffect, useState} from "react";
import { toast } from 'react-toastify';
import { useFormStore } from '../../../../data/hooks/custom-typed-selector';
import { IUseCase } from "../../../../data/domain/IUseCase";

const defaultClass = 'form-use-case-footer-buttons';

export const FooterButtons = () => {

    const dispatch = useDispatch();

    const [isSaving, setIsSaving] = useState(false);
    const {form, updateLoading, updateError} = useFormStore((state) => state.form);
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            const storedData = localStorage.getItem('offlineData');
            const newData = storedData ? JSON.parse(storedData) : null;
            if (newData) {
                try {
                    dispatchRequest(newData);
                } catch (error) {
                    toast.error("Error en la operación");
                }
            }
        };

        const handleOffLine = () => {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffLine);
        return () => {
            window.removeEventListener('online', handleOnline);
        };
    }, []);

    useEffect(() => {
        if (isSaving && !updateLoading) {
            if (updateError) {
                if (isOnline) {
                    toast.error("Error en la operación, intentalo de nuevo");
                } else {
                    toast.error("No tienes internet, ya guardamos tus datos");
                }
                localStorage.setItem('offlineData', JSON.stringify(form));
            } else if (form.id) {
                toast.success("Operación exitosa");
                localStorage.removeItem('offlineData');
            }
            setIsSaving(false);
        }
    }, [isSaving, updateLoading, updateError, form]);

    const handleSaveForm = () => {
        dispatchRequest(form);
    }

    const dispatchRequest = (useCase: IUseCase) => {
        dispatch(updateUseCase({
            ...useCase,
            case_state: { id: 'in-progress', name: 'En Progreso'}
        }));
        setIsSaving(true);
    }

    return (
        <div className={defaultClass}>
            <button disabled={updateLoading} onClick={handleSaveForm}>Guardar</button>
        </div>
    )
}
