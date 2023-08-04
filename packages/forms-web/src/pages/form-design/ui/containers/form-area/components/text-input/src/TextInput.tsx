import { IText } from "../../../../../../data/domain/IFormFields";
import '../styles/text-input.scss';

const defaultClass = 'text-input';

export const TextInput = ({ type, placeholder }: IText) => {

    return (
        <input type={ type } placeholder={ placeholder } className={ `${defaultClass}` } disabled/>
    )
}
