import '../styles/header.scss';
import { useDispatch } from "react-redux";
import { saveForm } from "../../../../data/state/effects/form.effect";
import {useDesignFormStore} from "../../../../data/hooks/custom-typed-selector";

const defaultClass = 'save-button';

const mocks = {
    formName: "Estudio 2",
    sections: [
        {
            permissions: [
                {
                    roleId: "0001",
                    text: "Secretaria",
                    permission: ["read", "write"]
                }
            ],
            fields: [
                {
                    isRequired: true,
                    type: "select",
                    label: "Tipo de documento",
                    placeholder: 'test',
                    maxLength: ''
                },
            ]
        }
    ]
};

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
