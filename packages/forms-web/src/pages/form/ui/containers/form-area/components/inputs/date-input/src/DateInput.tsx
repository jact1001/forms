import { IDate } from '../../../../../../../data/domain/IFormFields';

import '../styles/date-input.scss';

const defaultClass = 'date-input';

export const DateInput = ({ type }: IDate) => {
    return (
        <div className={defaultClass}>
            <label>Date:</label>
            <input type='date' className={ `${defaultClass}__format` } />
        </div>
    )
}
