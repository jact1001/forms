import {IIcon} from "../../../form-design/ui/interfaces/IIcon";
import {useState} from "react";

const defaultClass = 'slide-form';
const FormIcon = ({ width = '20px', color = '#fff' }: IIcon) => {
    return (
        <div className={`${defaultClass}__arrow-up-right`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.57495 0.875C3.32631 0.875 3.08785 0.973772 2.91204 1.14959C2.73622 1.3254 2.63745 1.56386 2.63745 1.8125C2.63745 2.06114 2.73622 2.2996 2.91204 2.47541C3.08785 2.65123 3.32631 2.75 3.57495 2.75H11.9249L1.14995 13.525C1.05784 13.6108 0.983962 13.7143 0.932722 13.8293C0.881482 13.9443 0.853929 14.0685 0.851708 14.1943C0.849487 14.3202 0.872644 14.4453 0.919795 14.562C0.966946 14.6787 1.03713 14.7848 1.12615 14.8738C1.21517 14.9628 1.32122 15.033 1.43795 15.0802C1.55469 15.1273 1.67972 15.1505 1.8056 15.1482C1.93148 15.146 2.05562 15.1185 2.17062 15.0672C2.28562 15.016 2.38912 14.9421 2.47495 14.85L13.2499 4.075V12.425C13.2499 12.6736 13.3487 12.9121 13.5245 13.0879C13.7004 13.2637 13.9388 13.3625 14.1874 13.3625C14.4361 13.3625 14.6745 13.2637 14.8504 13.0879C15.0262 12.9121 15.1249 12.6736 15.1249 12.425V1.8125C15.1243 1.68788 15.0988 1.56465 15.0499 1.45C14.9819 1.29018 14.8714 1.15207 14.7303 1.05069C14.5893 0.949313 14.4231 0.888547 14.2499 0.875H3.57495Z" fill="white"/>
            </svg>
        </div>

    )
}

export default FormIcon;
