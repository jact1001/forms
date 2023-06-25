import '../styles/section-header.scss';
import { useDispatch } from "react-redux";
import { saveForm } from "../../../../data/state/effects/form.effect";
import {useDesignFormStore} from "../../../../data/hooks/custom-typed-selector";

const defaultClass = 'save-button';

export const SaveButton = () => {

    const dispatch = useDispatch();
    const { form } = useDesignFormStore((state) => state.form);

    const handleSaveForm = () => {
        dispatch(saveForm(form));
    }

    return (
        <div className={defaultClass}>
            <button onClick={handleSaveForm}>Guardar</button>
        </div>
    )
}
