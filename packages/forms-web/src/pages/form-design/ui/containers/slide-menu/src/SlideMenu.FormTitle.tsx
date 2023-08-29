import '../styles/form-title.scss';
import {useDesignFormStore} from "../../../../data/hooks/custom-typed-selector";
import {useDispatch} from "react-redux";
import {updateFormName} from "../../../../data/state/effects/form.effect";
import {ChangeEvent} from "react";

const PLACEHOLDER= 'Ingresa el título del formulario';
const defaultClassName = 'form-title';

export const SlideMenuFormTitle = () => {

    const dispatch = useDispatch();
    const {form: {form_name}} = useDesignFormStore((state) => state.form);

    const handleOnChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateFormName(value));
    }

    return (
        <div className={defaultClassName}>
            <input type="text" placeholder={PLACEHOLDER} value={form_name} onChange={handleOnChange} />
        </div>
    )
}
