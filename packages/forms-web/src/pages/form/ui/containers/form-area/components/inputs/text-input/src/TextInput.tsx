
import '../styles/text-input.scss';

const defaultClass = 'text-input';

export const TextInput = () => {

    return (
        <input type='text' placeholder='placeholder text' className={ `${defaultClass}` } />
    )
}
