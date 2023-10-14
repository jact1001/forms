import { INumber } from '../../../../../../../data/domain/IFormFields';
import '../styles/number-input.scss';

const defaultClass = 'number-input';

export const NumberInput = ({ type, placeholder }: INumber) => {

    return (
        <div className={defaultClass}>
            <label htmlFor="quantity">Quantity between 1 and 5:</label>
            <input type="number" id="quantity" name="quantity" min="1" max="5" />

        </div>
        
    )
}
