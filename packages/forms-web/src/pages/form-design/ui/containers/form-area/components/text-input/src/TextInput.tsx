import '../styles/text-input.scss';

const defaultClass = 'text-input';

export const TextInput = ({type, label}: any) => {

    return (
        <input type={ type } placeholder={ label } className={ `${defaultClass}` } disabled/>
    )
}
