import { ITextArea } from '../../../../../../../data/domain/IFormFields';
import '../styles/text-area.scss';

const defaultClass = 'text-area';

export const TextArea = ({ placeholder }:ITextArea) => {

    return (
        <textarea className={ `${defaultClass}` } placeholder={ placeholder } />
    )
}
