import '../styles/text-area.scss';

const defaultClass = 'text-area';

export const TextArea = () => {

    return (
        <textarea className={ `${defaultClass}` } placeholder='placeholder textarea' />
    )
}
