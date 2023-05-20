import IconBack from '../icons/icon-back';
import IconForward from '../icons/icon-forward';
import './form-title.scss';

const TITLE_VALUE = 'Título';
const defaultClassName = 'form-title';

export const FormTitle = () => {

    return (
        <div className={defaultClassName}>
            <h2>{TITLE_VALUE}</h2>
            <div>
                <a className={`${defaultClassName}__icon`}><IconBack /></a>
                <a className={`${defaultClassName}__icon`}><IconForward /></a>
            </div>
        </div>
    )
}
