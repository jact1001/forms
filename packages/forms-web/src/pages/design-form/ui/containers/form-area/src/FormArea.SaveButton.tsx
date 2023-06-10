import '../styles/header.scss';

const defaultClass = 'save-button'

export const SaveButton = () => {

    const saveForm = () => {
      console.log('guardar...')
    }

    return (
        <div className={defaultClass}>
            <button onClick={saveForm}>Guardar</button>
        </div>
    )
}
