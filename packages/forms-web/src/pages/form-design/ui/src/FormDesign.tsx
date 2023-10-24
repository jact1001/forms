import React, {useEffect} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/form-design.scss';
import 'react-toastify/dist/ReactToastify.css';
import SlideMenu from "../containers/slide-menu/src/SlideMenu";
import FormArea from "../containers/form-area/src/FormArea";
import {Redirect, useHistory, useParams} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from "react-redux";
import { getFormById } from "../../data/state/effects/form.effect";
import { useDesignFormStore } from "../../data/hooks/custom-typed-selector";
import { FooterButtons } from "../containers/footer-buttons/src/FooterButtons";
import { useLoginStore } from "../../../login/data/hooks/custom-typed-selector";
import {Header} from "../../../header/src/Header";

const defaultClass = 'form-design';

export const FormDesign = () => {

    // @ts-ignore
    const { formId } = useParams();
    const { getError, getLoading } = useDesignFormStore((state) => state.form);
    const { isLogin } = useLoginStore((state) => state.login);
    const isAuthenticated = sessionStorage.getItem('session');
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (formId) {
            dispatch(getFormById(formId));
        }
    }, [formId, dispatch]);

    /*useEffect(() => {
        if (!isLogin) {
            history.push('/login');
        }
    }, [isLogin]);*/

    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }
    console.info(isLogin, history);
    return (
        <>
            <Header />
            <div className={defaultClass}>
                <DndProvider backend={HTML5Backend} >
                    <SlideMenu>
                        <SlideMenu.Logo />
                        <SlideMenu.FormTitle />
                        <SlideMenu.AddTitle />
                        <SlideMenu.DragInputMenu />
                    </SlideMenu>
                    { getError && <div>{getError}</div> }
                    { getLoading && <div>Cargando...</div> }
                    { !getError && !getLoading && <FormArea/> }
                    <FooterButtons />
                    <ToastContainer />
                </DndProvider>
            </div>
        </>

    )
}
