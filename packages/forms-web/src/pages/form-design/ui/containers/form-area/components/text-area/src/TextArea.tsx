import '../styles/text-area.scss';

const defaultClass = 'text-area';

export const TextArea = ({label}: any) => {

    return (
        <textarea className={ `${defaultClass}` } placeholder={ label } disabled/>
    )
}
