import '../styles/text-area.scss';
import { ITextArea } from "../../../../../../data/domain/IFormFields";

const defaultClass = 'text-area';

export const TextArea = ({label}: ITextArea) => {

    return (
        <textarea className={ `${defaultClass}` } placeholder={ label } disabled/>
    )
}
