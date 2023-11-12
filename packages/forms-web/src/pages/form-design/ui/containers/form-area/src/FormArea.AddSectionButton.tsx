import '../styles/add-section-button.scss';
import { useDispatch } from "react-redux";
import { addSection } from "../../../../data/state/effects/form.effect";
import AddIconButton from "../components/icons/add-icon-button";
import { v4 as uuidv4 } from 'uuid';
import { useDesignFormStore } from "../../../../data/hooks/custom-typed-selector";
import {IAccess} from "../../../../data/domain/IForm";

const defaultClass = 'add-section-button';

export const AddSectionButton = () => {

    const dispatch = useDispatch();
    const { users } = useDesignFormStore((state) => state.users);

    const session = sessionStorage.getItem('session') || '';
    const email = JSON.parse(session)?.email;
    const user = users?.find((user) => user.email === email) || {email: '', user_name: ''};
    const authorAccess: IAccess = {userId: user.email, userName: user.user_name, permission: ['write']}

    const handleSaveForm = () => {
        dispatch(addSection(uuidv4(), authorAccess));
    }

    return (
        <div className={defaultClass} onClick={handleSaveForm}>
            <AddIconButton />
        </div>
    )
}
