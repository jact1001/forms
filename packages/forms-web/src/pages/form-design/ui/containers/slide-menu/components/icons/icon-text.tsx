import {IIcon} from "../../../../interfaces/IIcon";

const IconText = ({ width='20px', color='#fff'}: IIcon) => {
    return (
        <svg width={width} height="6px" viewBox="0 0 16 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>short_text</title>
            <desc>Created with Sketch.</desc>
            <g id="Icons" stroke="none" fill="none">
                <g id="Rounded" transform="translate(-444.000000, -2067.000000)">
                    <g id="Editor" transform="translate(100.000000, 1960.000000)">
                        <g id="-Round-/-Editor-/-short_text" transform="translate(340.000000, 98.000000)">
                            <g transform="translate(0.000000, 0.000000)">
                                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                                <path d="M5,9 L19,9 C19.55,9 20,9.45 20,10 C20,10.55 19.55,11 19,11 L5,11 C4.45,11 4,10.55 4,10 C4,9.45 4.45,9 5,9 Z M5,13 L13,13 C13.55,13 14,13.45 14,14 C14,14.55 13.55,15 13,15 L5,15 C4.45,15 4,14.55 4,14 C4,13.45 4.45,13 5,13 Z" id="🔹-Icon-Color" fill={color}></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default IconText;
