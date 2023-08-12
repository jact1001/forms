import '../styles/text-area.scss';
import { ITextArea } from "../../../../../../../data/domain/IFormFields";

const defaultClass = 'text-area';

export const TextArea = ({ placeholder }: ITextArea) => {

    return (
        <textarea className={ `${defaultClass}` } placeholder={ placeholder } disabled/>
    )
}
