import { IIcon } from "../../../../interfaces/IIcon";

const IconAdd = ({ width = '20px', color = '#fff' }: IIcon) => {
    return (
        <svg width={width} viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rounded" transform="translate(-411.000000, -1487.000000)">
                    <g id="Content" transform="translate(100.000000, 1428.000000)">
                        <g id="-Round-/-Content-/-add" transform="translate(306.000000, 54.000000)">
                            <g transform="translate(0.000000, 0.000000)">
                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                <path d="M18,13 L13,13 L13,18 C13,18.55 12.55,19 12,19 C11.45,19 11,18.55 11,18 L11,13 L6,13 C5.45,13 5,12.55 5,12 C5,11.45 5.45,11 6,11 L11,11 L11,6 C11,5.45 11.45,5 12,5 C12.55,5 13,5.45 13,6 L13,11 L18,11 C18.55,11 19,11.45 19,12 C19,12.55 18.55,13 18,13 Z" id="🔹Icon-Color" fill={color}></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default IconAdd; 