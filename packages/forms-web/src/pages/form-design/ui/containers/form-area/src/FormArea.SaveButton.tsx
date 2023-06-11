import '../styles/header.scss';
import { useDispatch } from "react-redux";
import { saveForm } from "../../../../data/state/effects/form.effect";

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

    const handleSaveForm = () => {
        dispatch(saveForm(mocks));
    }

    return (
        <div className={defaultClass}>
            <button onClick={handleSaveForm}>Guardar</button>
        </div>
    )
}
