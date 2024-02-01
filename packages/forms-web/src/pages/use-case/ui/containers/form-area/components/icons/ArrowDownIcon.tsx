import {IIcon} from "../../../../interfaces/IIcon";

const defaultClass = 'arrow-down-icon';
const ArrowDownIcon = ({ width = '20px', color = '#fff' }: IIcon) => {
    return (
        <div className={`${defaultClass}__arrow-down`}>
            <svg  width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.49996 9.1C7.82912 9.1 7.15829 8.84125 6.65037 8.33334L0.402041 2.085C0.124124 1.80709 0.124124 1.34709 0.402041 1.06917C0.679958 0.791254 1.13996 0.791254 1.41787 1.06917L7.66621 7.3175C8.12621 7.7775 8.87371 7.7775 9.33371 7.3175L15.582 1.06917C15.86 0.791254 16.32 0.791254 16.5979 1.06917C16.8758 1.34709 16.8758 1.80709 16.5979 2.085L10.3495 8.33334C9.84162 8.84125 9.17079 9.1 8.49996 9.1Z" fill="white"/>
            </svg>
        </div>
    )
}

export default ArrowDownIcon;
