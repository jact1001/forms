import IconBack from '../components/icons/icon-back';
import IconForward from '../components/icons/icon-forward';
import '../styles/form-title.scss';

const TITLE_VALUE = 'Título';
const defaultClassName = 'form-title';

export const SlideMenuFormTitle = () => {

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
