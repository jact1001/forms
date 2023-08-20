import DeleteIcon from '../../icons/delete-icon';
import '../styles/delete.scss';

const defaultClass = 'delete';

export const Delete = () => {

    return (
        <div className={`${defaultClass}`}>
            <DeleteIcon />
            <span className={`${defaultClass}__text`}>Eliminar</span>
        </div>
    )
}