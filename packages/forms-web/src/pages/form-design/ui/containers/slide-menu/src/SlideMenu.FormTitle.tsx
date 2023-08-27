import '../styles/form-title.scss';

const PLACEHOLDER= 'Ingresa el título del formulario';
const defaultClassName = 'form-title';

export const SlideMenuFormTitle = () => {

    return (
        <div className={defaultClassName}>
            <input type="text" placeholder={PLACEHOLDER} />
        </div>
    )
}
