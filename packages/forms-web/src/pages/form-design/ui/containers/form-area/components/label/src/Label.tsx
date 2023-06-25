import '../styles/label.scss';

const defaultClass = 'label';
const labelText = 'Escribe aquí el nombre de tu campo';

export const Label = () => {

    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__input-line`} >
                <input
                    type='text'
                    className={`${defaultClass}__label-text`}
                    placeholder={ labelText }
                />
                <span className={`${defaultClass}__line`}></span>
            </div>
        </div>
    )

}
