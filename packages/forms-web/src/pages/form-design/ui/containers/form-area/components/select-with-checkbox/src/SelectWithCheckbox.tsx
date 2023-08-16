import {useEffect, useRef, useState} from 'react';
import '../styles/select-with-checkbox.scss';

const defaultClass = 'select-with-checkbox';

export interface IOption {
    id: string,
    text: string
}

interface SelectWithCheckboxProps {
    options: IOption[],
    onSelect: (options: IOption[]) => void
}

export const SelectWithCheckbox = ({options, onSelect}: SelectWithCheckboxProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<IOption[]>([]);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (option: IOption) => {
        const updatedSelectedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter(item => item !== option)
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
                Seleccionar opciones
            </button>
            {isOpen && (
                <div className={`${defaultClass}__select-content`}>
                    {options.map((option: IOption) => (
                        <label key={option.id}>
                            <input
                                type="checkbox"
                                checked={selectedOptions.includes(option)}
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
