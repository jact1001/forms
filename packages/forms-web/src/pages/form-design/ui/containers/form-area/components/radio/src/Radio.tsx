import { Label } from '../../label/src/Label';
import '../styles/radio.scss';

const defaultClass = 'radio';

export const Radio = ({ type, label }: any) => {

    return (
        <div className='container'>
            <Label />
            <input type={ type } id="radio-1" name="form" className={`${defaultClass}`} /><label className='radio-label'>JavaScript</label>
            <input type={ type } id="radio-2" name="form" className={`${defaultClass}`} /><label className='radio-label'>Java</label>
            <input type={ type } id="radio-3" name="form" className={`${defaultClass}`} /><label className='radio-label'>Python</label>
        </div>
    )
}