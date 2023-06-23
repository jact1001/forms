import { Label } from '../../label/src/Label';
import IconClose from '../../icons/icon-close';
import '../styles/radio.scss';

const defaultClass = 'radio';

export const Radio = ({ type, label }: any) => {

    return (
        <>
            <Label />
            <div className="radio-group">
                <input type={type} id="radio-1" name="form" className={`${defaultClass}`} disabled />
                <div className="label">
                    <div className="input-line">
                        <input 
                            type='text' 
                            className='input-text'
                            placeholder='Opción 1'
                        />
                        <span className='line'></span>
                    </div>
                    <IconClose />
                </div>
            </div>
            <div className="radio-group">
                <input type={type} id="radio-1" name="form" className={`${defaultClass}`} disabled />
                <div className="label">
                    <div className="input-line">
                        <input 
                            type='text' 
                            className='input-text input-text--add'
                            placeholder='Añadir opción'
                        />
                        <span className='line'></span>
                    </div>
                </div>
            </div>
        </>
    )
}