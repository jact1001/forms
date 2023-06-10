import IconAdd from '../components/icons/icon-add';
import '../styles/add-title.scss';

const TITLE_VALUE = 'Añadir';
const defaultClass = 'add-title'

export const AddTitle = () => {
    return (
        <div className={defaultClass}>
            <h1><IconAdd /> {TITLE_VALUE}</h1>
        </div>
    )
}
