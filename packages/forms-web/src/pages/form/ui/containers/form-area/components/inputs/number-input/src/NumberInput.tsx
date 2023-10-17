import { INumber } from '../../../../../../../data/domain/IFormFields';
import { Label } from '../../../label/src/Label';
import '../styles/number-input.scss';

const defaultClass = 'number-input';

export const NumberInput = ({ type, min, label }: INumber) => {

    return (
            <input type={ type } min={ min } className={ defaultClass } />
    )
}
