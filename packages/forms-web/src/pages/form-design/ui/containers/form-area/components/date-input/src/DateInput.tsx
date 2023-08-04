import { IDate } from '../../../../../../data/domain/IFormFields';
import DateIcon from '../../icons/date-icon';
import '../styles/date-input.scss';

const defaultClass = 'date-input';

export const DateInput = ({ type }: IDate) => {
    return (
        <div className={defaultClass}>
            <input type={ type } className={ `${defaultClass}__format` } disabled/>
            <DateIcon/>
        </div>
    )
}