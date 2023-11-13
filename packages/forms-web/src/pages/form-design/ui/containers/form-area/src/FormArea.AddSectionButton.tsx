import '../styles/add-section-button.scss';
import { useDispatch } from "react-redux";
import { addSection } from "../../../../data/state/effects/form.effect";
import AddIconButton from "../components/icons/add-icon-button";
import { v4 as uuidv4 } from 'uuid';

const defaultClass = 'add-section-button';

export const AddSectionButton = () => {

    const dispatch = useDispatch();

    const handleSaveForm = () => {
        dispatch(addSection(uuidv4()));
    }

    return (
        <div className={defaultClass} onClick={handleSaveForm}>
            <AddIconButton />
        </div>
    )
}
