import TimeIcon from '../../icons/time-icon';
import { ITime } from '../../../../../../data/domain/IFormFields';
import '../styles/time-input.scss';

const defaultClass = 'time-input';

export const TimeInput = ({ type }: ITime) => {
    return (
        <div className={ defaultClass }>
            <input type={ type } className={ `${defaultClass}__format` } disabled/>
            <TimeIcon />
        </div>
    )
}