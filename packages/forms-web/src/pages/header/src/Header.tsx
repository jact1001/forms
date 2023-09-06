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
    }, [isLogin, loading, error]);

    const logoutHandler = () => {
        dispatch(logout());
        setIsLogoutAction(true);
    }

    return (
        <div className={defaultClass}>
            <button onClick={logoutHandler} className={`${defaultClass}__button`}>
                <ReturnIcon />
                <b className={`${defaultClass}__button-title`}>Salir</b>
            </button>
        </div>
    );
}
