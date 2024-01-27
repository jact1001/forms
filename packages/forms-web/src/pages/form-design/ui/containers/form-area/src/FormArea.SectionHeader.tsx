import '../styles/section-header.scss';
import { IAccess } from "../../../../data/domain/IForm";
import { useDispatch } from "react-redux";
import {removeSection, updateSectionAccess, updateSectionName} from "../../../../data/state/effects/form.effect";
import React, { ChangeEvent, useEffect } from "react";
import { useDesignFormStore } from "../../../../data/hooks/custom-typed-selector";
import { findUsers } from "../../../../data/state/effects/users.effect";
import { IOption, SelectWithCheckbox } from "../components/select-with-checkbox/src/SelectWithCheckbox";
import {Delete} from "../components/options/src/Delete";

const defaultClass = 'section-header';

interface ISectionHeaderProps {
    sectionId: string;
    sectionName: string;
    access: IAccess[];
    sectionsLength: number;
}

export const SectionHeader = ({sectionName, access, sectionId, sectionsLength}: ISectionHeaderProps) => {

    const dispatch = useDispatch();
    const { users } = useDesignFormStore((state) => state.users);

    useEffect(() => {
        dispatch(findUsers());
    }, [dispatch]);

    const handleOnChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSectionName(value, sectionId));
    }

    const handleDropdownSelect = (selectedOptions: IOption[]) => {
        const newAccess: IAccess[] = selectedOptions.map((option) => {
            return {
                userName: option.text,
                userId: option.id,
                permission: ['write']
            }
        })
        dispatch(updateSectionAccess(newAccess, sectionId));
    };

    const dropdownOptions: IOption[] = users?.map((user) => {
        return {id: user.email, text: user.user_name}
    }) || [];

    const selected: IOption[]  = access.map((user) => {
        return {id: user.userId, text: user.userName}
    });

    const handlerRemoveSection = () => {
        dispatch(removeSection(sectionId))
    }

    return (
        <div className={defaultClass}>
            <SelectWithCheckbox selected={selected} options={dropdownOptions} onSelect={handleDropdownSelect} />
            <input className={`${defaultClass}__section-name`} type="text" id="name-section" placeholder={`Sección #${sectionsLength} - ingresa un nombre`} required minLength={4} maxLength={120} value={sectionName} onChange={handleOnChange} />
            {sectionsLength > 1 && <Delete onClick={() => handlerRemoveSection()} /> }
        </div>

    )
}
