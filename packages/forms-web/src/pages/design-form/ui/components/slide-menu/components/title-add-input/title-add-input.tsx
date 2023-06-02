import IconAdd from '../icons/icon-add';
import './title-add-input.scss';

const TITLE_VALUE = 'Añadir';

export const TitleAddInput = () => {
    return (
        <div className='title-add-input'>
            <h1><IconAdd /> {TITLE_VALUE}</h1>
        </div>
    )
}
