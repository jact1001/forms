import '../styles/section-header.scss';

const defaultClass = 'section-header';

export const SectionHeader = () => {
    return (
        <div className={defaultClass}>
            <select className={`${defaultClass}__select-user`} name='user'>
                <option value='user1'>User 1</option>
                <option value='user2'>User 2</option>
            </select>
            <input className={`${defaultClass}__section-name`} type="text" id='name-section' placeholder='Sección #1' required minLength={4} maxLength={15} />
        </div>

    )
}
