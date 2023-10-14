import {useEffect, useRef, useState} from 'react';
import '../styles/select-with-checkbox.scss';
import ArrowDownIcon from "../../icons/ArrowDownIcon";

const defaultClass = 'select-with-checkbox';

export interface IOption {
    id: string,
    text: string
}

interface SelectWithCheckboxProps {
    options: IOption[],
    selected: IOption[],
    onSelect: (options: IOption[]) => void
}

export const SelectWithCheckbox = ({options, onSelect, selected}: SelectWithCheckboxProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<IOption[]>(selected);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const optionIsChecked = (option: IOption) => {
        return selectedOptions.some((selectedOption) => selectedOption.id === option.id);
    }

    const handleCheckboxChange = (option: IOption) => {
        const updatedSelectedOptions = optionIsChecked(option)
            ? selectedOptions.filter(item => item.id !== option.id)
            : [...selectedOptions, option];

        setSelectedOptions(updatedSelectedOptions);
        onSelect(updatedSelectedOptions);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div ref={dropdownRef}  className={defaultClass}>
            <button className={`${defaultClass}__select-button`} onClick={toggleDropdown}>
                <span>Selecciona los usuarios</span>
                <ArrowDownIcon />
            </button>
            {isOpen && (
                <div className={`${defaultClass}__select-content`}>
                    {options.map((option: IOption) => (
                        <label key={option.id}>
                            <input
                                type="checkbox"
                                checked={optionIsChecked(option)}
                                onChange={() => handleCheckboxChange(option)}
                            />
                            {option.text}
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};
