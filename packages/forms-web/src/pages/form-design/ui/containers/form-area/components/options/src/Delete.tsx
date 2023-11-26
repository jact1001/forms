import DeleteIcon from '../../icons/delete-icon';
import '../styles/delete.scss';

const defaultClass = 'delete';

interface IDeleteProps {
    onClick: () => void;
}

export const Delete = ({onClick}: IDeleteProps) => {

    return (
        <button onClick={onClick} className={`${defaultClass}`}>
            <DeleteIcon />
            <span className={`${defaultClass}__text`}>Eliminar</span>
        </button>
    )
}
