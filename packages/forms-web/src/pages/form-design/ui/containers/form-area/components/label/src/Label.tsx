import '../styles/label.scss';

const defaultClass = 'label-text';
const labelText = 'Pregunta';

export const Label = () => {

    return (
        <div className='label'>
            <div className='input-line'>
                <input 
                    type='text' 
                    className={ `${defaultClass}` }
                    placeholder={ labelText }
                />
                <span className='line'></span>
            </div>             
        </div>
    )

}