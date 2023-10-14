import '../styles/time-input.scss';

import TimeIcon from '../../../icons/time-icon';

const defaultClass = 'time-input';

export const TimeInput = () => {
    return (
        <div className={ defaultClass }>
            <input type='time' className={ `${defaultClass}__format` } />
            <TimeIcon />
        </div>
    )
}
