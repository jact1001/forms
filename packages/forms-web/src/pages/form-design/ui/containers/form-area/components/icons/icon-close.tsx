import { IIcon } from "../../../../interfaces/IIcon";

const IconClose = ({ width = '20px', color = '#fff' }: IIcon) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={width} className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}

export default IconClose; 