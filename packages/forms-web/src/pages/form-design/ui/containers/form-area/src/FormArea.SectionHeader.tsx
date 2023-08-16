import '../styles/section-header.scss';
import {IAccess} from "../../../../data/domain/IForm";
import {useDispatch} from "react-redux";
import {updateSectionName} from "../../../../data/state/effects/form.effect";
import React, {ChangeEvent, useEffect} from "react";
import {useDesignFormStore} from "../../../../data/hooks/custom-typed-selector";
import {findUsers} from "../../../../data/state/effects/users.effect";
import {IOption, SelectWithCheckbox} from "../components/select-with-checkbox/src/SelectWithCheckbox";

const defaultClass = 'section-header';

interface ISectionHeaderProps {
    sectionId: string;
    sectionName: string;
    access: IAccess[];
}

export const SectionHeader = ({sectionName, access, sectionId}: ISectionHeaderProps) => {

    const dispatch = useDispatch();
    const { users } = useDesignFormStore((state) => state.users);

    useEffect(() => {
        dispatch(findUsers());
    }, []);

    const handleOnChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSectionName(value, sectionId));
    }

    const handleDropdownSelect = (selectedOptions: any) => {
        console.log('Opciones seleccionadas:', selectedOptions);
    };

    const dropdownOptions: IOption[] = users?.map((user) => {
        return {id: user.number_id, text: `${user.number_id} - ${user.user_name}`}
    }) || [];

    return (
        <div className={defaultClass}>
            <SelectWithCheckbox options={dropdownOptions} onSelect={handleDropdownSelect} />
            <input className={`${defaultClass}__section-name`} type="text" id="name-section" placeholder="Sección #1" required minLength={4} maxLength={120} value={sectionName} onChange={handleOnChange} />
        </div>

    )
}
