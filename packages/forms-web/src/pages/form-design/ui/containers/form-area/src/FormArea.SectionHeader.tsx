import '../styles/section-header.scss';
import {IAccess} from "../../../../data/domain/IForm";
import {useDispatch} from "react-redux";
import {updateSectionName} from "../../../../data/state/effects/form.effect";
import React, {ChangeEvent} from "react";

const defaultClass = 'section-header';

interface ISectionHeaderProps {
    sectionId: string;
    sectionName: string;
    access: IAccess[];
}

export const SectionHeader = ({sectionName, access, sectionId}: ISectionHeaderProps) => {

    const dispatch = useDispatch();

    const handleOnChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSectionName(value, sectionId));
    }

    return (
        <div className={defaultClass}>
            <select className={`${defaultClass}__select-user`} name='user'>
                <option value='user1'>User 1</option>
                <option value='user2'>User 2</option>
            </select>
            <input className={`${defaultClass}__section-name`} type="text" id="name-section" placeholder="Sección #1" required minLength={4} maxLength={120} value={sectionName} onChange={handleOnChange} />
        </div>

    )
}
