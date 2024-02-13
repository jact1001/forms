import React, {useEffect, useState} from 'react';
import '../styles/header.scss';
import {useHistory, useLocation} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../pages/login/data/state/effects/login.effects";
import { useLoginStore } from "../../../pages/login/data/hooks/custom-typed-selector";
import ReturnIcon from "../../../pages/user-forms/ui/icons/ReturnIcon";
import Logo from "../../logo/src/Logo";

const defaultClass = 'Header'

export const Header = () => {

    const location = useLocation();

    const history = useHistory();
    const dispatch = useDispatch();
    const [isLogoutAction, setIsLogoutAction] = useState(false);
    const { isLogin, error, loading } = useLoginStore((state) => state.login);

    useEffect(() => {
        if (isLogoutAction && !loading) {
            if (isLogin) {
                history.push('/user-forms');
            } else {
                history.push('/login');
            }
            setIsLogoutAction(false);
        }
    }, [isLogin, loading, error, history, isLogoutAction]);

    const logoutHandler = () => {
        dispatch(logout());
        setIsLogoutAction(true);
    }

    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__menu-container`}>
                <div className={`${defaultClass}__logo`}>
                    <Logo width='30' height='30' />
                    <span>DYNAMIC FORMS</span>
                </div>
                <div className={`${defaultClass}__menu`}>
                    <a className={`${defaultClass}__link ${defaultClass}__link--${isActive('/user-forms')}`} href="/user-forms">Formularios</a>
                    <a className={`${defaultClass}__link ${defaultClass}__link--${isActive('/form-design')}`} href="/form-design">Diseño de formulario</a>
                </div>
            </div>
            <button onClick={logoutHandler} className={`${defaultClass}__logout`}>
                <ReturnIcon />
                <b className={`${defaultClass}__logout-title`}>Salir</b>
            </button>
        </div>
    );
}
