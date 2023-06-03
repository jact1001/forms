import Logo from '../components/icons/logo-forms.svg';
import '../styles/forms-logo.scss';

const defaultClass = 'forms-logo';

export const SlideMenuFormsLogo = () => {

    return (
        <img src={Logo} alt="logo" className={defaultClass} />
    )

}
