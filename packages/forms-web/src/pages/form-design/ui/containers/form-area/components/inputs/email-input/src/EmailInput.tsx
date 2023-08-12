import { IEmail } from '../../../../../../../data/domain/IFormFields';
import '../styles/email-input.scss';

const defaultClass = 'email-input';

export const EmailInput = ({ type, placeholder }:IEmail) => {
    return (
        <input type={ type } placeholder={ placeholder } className={ defaultClass } disabled/>
    )
}
