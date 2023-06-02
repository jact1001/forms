import { FormDropArea } from '../form-drop-area/form-drop-area';
import { FormHeader } from '../form-header/form-header';
import './form-section.scss';

export const FormSection = () => {
    return (
        <div className='form-section'>
            <FormHeader />
            <FormDropArea />
        </div>
    )
}
