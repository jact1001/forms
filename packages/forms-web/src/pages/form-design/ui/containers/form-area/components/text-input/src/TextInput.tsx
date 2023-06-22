import { Label } from '../../label/src/Label';
import '../styles/text-input.scss';

const defaultClass = 'text-input';

export const TextInput = ({type, label}: any) => {

    return (
        <>
            <Label />
            <input type={ type } placeholder={ label } className={ `${defaultClass}` } disabled/>
        </>
    )
}           