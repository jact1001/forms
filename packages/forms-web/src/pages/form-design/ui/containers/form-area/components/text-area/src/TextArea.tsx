import { Label } from '../../label/src/Label';
import '../styles/text-area.scss';

const defaultClass = 'text-area';

export const TextArea = ({label}: any) => {

    return (
        <>
            <Label />
            <textarea className={ `${defaultClass}` } placeholder={ label } disabled/>
        </>
    )
}
