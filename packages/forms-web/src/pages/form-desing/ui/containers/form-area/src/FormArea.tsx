import '../styles/form-area.scss';
import {ReactNode} from "react";
import {FormAreaHeader} from "./FormArea.Header";
import {FormAreaDropArea} from "./FormArea.DropArea";
import {SaveButton} from "./FormArea.SaveButton";

interface IFormArea {
    children: ReactNode;
}

const defaultClass = 'form-area';

const FormArea = ({ children }: IFormArea) => {
    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__form-section`}>
                {children}
            </div>
        </div>
    )
}

FormArea.Header = FormAreaHeader;
FormArea.DropArea = FormAreaDropArea;
FormArea.SaveButton = SaveButton;

export default FormArea;
