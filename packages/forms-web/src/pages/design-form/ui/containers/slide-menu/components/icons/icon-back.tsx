import { IIcon } from "../../../../interfaces/IIcon";

const IconBack = ({ width = '20px', color = '#fff' }: IIcon) => {
    return (
        <svg width={width} height="27" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4999 26.2604C8.69699 26.2566 6.00997 25.1414 4.028 23.1594C2.04603 21.1775 0.93086 18.4904 0.927002 15.6875C0.927002 15.3974 1.04224 15.1192 1.24735 14.9141C1.45247 14.709 1.73067 14.5938 2.02075 14.5938C2.31083 14.5938 2.58903 14.709 2.79415 14.9141C2.99927 15.1192 3.1145 15.3974 3.1145 15.6875C3.1145 17.346 3.6063 18.9672 4.5277 20.3462C5.4491 21.7252 6.75872 22.8 8.29096 23.4346C9.82319 24.0693 11.5092 24.2354 13.1358 23.9118C14.7624 23.5882 16.2566 22.7896 17.4293 21.6169C18.602 20.4442 19.4007 18.95 19.7242 17.3234C20.0478 15.6968 19.8817 14.0108 19.247 12.4785C18.6124 10.9463 17.5376 9.63669 16.1586 8.71529C14.7796 7.79389 13.1584 7.30209 11.4999 7.30209H7.85408C7.564 7.30209 7.28581 7.18686 7.08069 6.98174C6.87557 6.77662 6.76033 6.49842 6.76033 6.20834C6.76033 5.91826 6.87557 5.64006 7.08069 5.43495C7.28581 5.22983 7.564 5.11459 7.85408 5.11459H11.4999C14.304 5.11459 16.9933 6.22852 18.9761 8.21133C20.9589 10.1941 22.0728 12.8834 22.0728 15.6875C22.0728 18.4916 20.9589 21.1809 18.9761 23.1637C16.9933 25.1465 14.304 26.2604 11.4999 26.2604Z" fill={color} />
            <path d="M11.5 11.6771C11.3563 11.6778 11.2139 11.6497 11.0812 11.5946C10.9485 11.5396 10.8281 11.4585 10.7271 11.3563L6.3521 6.98126C6.14727 6.77618 6.03223 6.49819 6.03223 6.20834C6.03223 5.9185 6.14727 5.64051 6.3521 5.43543L10.7271 1.06043C10.8272 0.952967 10.948 0.866777 11.0821 0.806997C11.2163 0.747217 11.3611 0.715072 11.508 0.712481C11.6549 0.70989 11.8007 0.736905 11.9369 0.791915C12.0731 0.846925 12.1968 0.928802 12.3007 1.03266C12.4046 1.13652 12.4864 1.26024 12.5414 1.39643C12.5965 1.53262 12.6235 1.6785 12.6209 1.82536C12.6183 1.97221 12.5861 2.11705 12.5264 2.25121C12.4666 2.38538 12.3804 2.50613 12.2729 2.60626L8.67085 6.20834L12.2729 9.81043C12.4778 10.0155 12.5928 10.2935 12.5928 10.5833C12.5928 10.8732 12.4778 11.1512 12.2729 11.3563C12.1719 11.4585 12.0516 11.5396 11.9188 11.5946C11.7861 11.6497 11.6437 11.6778 11.5 11.6771Z" fill={color} />
        </svg>
    )
}

export default IconBack;