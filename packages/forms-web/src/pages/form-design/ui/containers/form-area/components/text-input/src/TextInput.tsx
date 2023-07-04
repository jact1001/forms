import '../styles/text-input.scss';
import { IText } from "../../../../../../data/domain/IFormFields";

const defaultClass = 'text-input';

export const TextInput = ({ type, label }: IText) => {

    return (
        <input type={ type } placeholder={ label } className={ `${defaultClass}` } disabled/>
    )
}
