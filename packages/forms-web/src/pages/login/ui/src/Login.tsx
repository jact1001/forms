import React, {useEffect, useState} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import '../styles/login.scss';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../data/state/effects/login.effects";
import { useLoginStore } from "../../data/hooks/custom-typed-selector";

const defaultClass = 'login'

export const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoginAction, setIsLoginAction] = useState(false);
    const { isLogin, loading, error } = useLoginStore((state) => state.login);

    useEffect(() => {
        if (isLoginAction && !loading) {
            if (isLogin) {
                history.push('/user-forms');
            } else if (error) {
                history.push('/login');
            }
            setIsLoginAction(false);
        }
    }, [isLogin, loading, error, history, isLoginAction]);

    const onSuccessLogin = (credentialResponse: any) => {
        dispatch(login(credentialResponse.credential));
        setIsLoginAction(true);
    }

    const onErrorLogin = () => {
        sessionStorage.removeItem('session');
    }

    return (
        <div className={defaultClass}>
            <GoogleLogin
                onSuccess={credentialResponse => onSuccessLogin(credentialResponse)}
                onError={() => onErrorLogin()}
            />
        </div>
    );
}
