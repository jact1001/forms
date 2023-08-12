import '../styles/time-input.scss';
import { ITime } from '../../../../../../../data/domain/IFormFields';
import TimeIcon from '../../../icons/time-icon';

const defaultClass = 'time-input';

export const TimeInput = ({ type }: ITime) => {
    return (
        <div className={ defaultClass }>
            <input type={ type } className={ `${defaultClass}__format` } disabled/>
            <TimeIcon />
        </div>
    )
}
