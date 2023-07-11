import {IIcon} from "../../../form-design/ui/interfaces/IIcon";
import '../styles/status-case-icon.scss';
const StatusCaseIcon = ({ width = '20px', color = '#fff' }: IIcon) => {
    return (
        <svg width="25" height="25" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg" >
            <path d="M12.5 21.875C17.6777 21.875 21.875 17.6777 21.875 12.5C21.875 7.32233 17.6777 3.125 12.5 3.125C7.32233 3.125 3.125 7.32233 3.125 12.5C3.125 17.6777 7.32233 21.875 12.5 21.875Z  "/>
        </svg>
    )
}

export default StatusCaseIcon;