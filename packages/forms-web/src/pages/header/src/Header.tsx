import React, {useEffect, useState} from 'react';
import '../styles/header.scss';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../login/data/state/effects/login.effects";
import { useLoginStore } from "../../login/data/hooks/custom-typed-selector";
import ReturnIcon from "../../user-forms/ui/icons/ReturnIcon";

const defaultClass = 'Header'

export const Header = () => {

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

    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__menu`}>
                <a href="/user-forms">Mis formularios</a>
                <a href="/form-design">Diseño de formulario</a>
            </div>
            <button onClick={logoutHandler} className={`${defaultClass}__logout`}>
                <ReturnIcon />
                <b className={`${defaultClass}__logout-title`}>Salir</b>
            </button>
        </div>
    );
}
