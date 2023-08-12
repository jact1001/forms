import '../styles/add-section-button.scss';
import { useDispatch } from "react-redux";
import { saveForm } from "../../../../data/state/effects/form.effect";
import { useDesignFormStore } from "../../../../data/hooks/custom-typed-selector";
import AddIconButton from "../components/icons/add-icon-button";

const defaultClass = 'add-section-button';

export const AddSectionButton = () => {

    const dispatch = useDispatch();
    const { form } = useDesignFormStore((state) => state.form);

    const handleSaveForm = () => {
        dispatch(saveForm(form));
    }

    return (
        <div className={defaultClass}>
            <AddIconButton />
        </div>
    )
}
