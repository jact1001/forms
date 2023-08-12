import { INumber } from '../../../../../../../data/domain/IFormFields';
import '../styles/number-input.scss';

const defaultClass = 'number-input';

export const NumberInput = ({ type, placeholder }: INumber) => {

    return (
        <input type={ type } placeholder={ placeholder } className={ defaultClass } disabled/>
    )
}
