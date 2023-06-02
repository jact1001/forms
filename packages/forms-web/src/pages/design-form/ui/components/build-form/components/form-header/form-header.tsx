import './form-header.scss';

export const FormHeader = () => {
    return (
        <div className='form-header'>
            <select className='select-user' name='user'>
                <option value='user1'>User 1</option>
                <option value='user2'>User 2</option>
            </select>
            <input className='form-header__section-name' type="text" id='name-section' placeholder='Sección #1' required minLength={4} maxLength={15} />
        </div>

    )
}
