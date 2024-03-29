import React, {useEffect} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/form-design.scss';
import 'react-toastify/dist/ReactToastify.css';
import SlideMenu from "../containers/slide-menu/src/SlideMenu";
import FormArea from "../containers/form-area/src/FormArea";
import {Redirect, useParams} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from "react-redux";
import { getFormById } from "../../data/state/effects/form.effect";
import { useDesignFormStore } from "../../data/hooks/custom-typed-selector";
import { FooterButtons } from "../containers/footer-buttons/src/FooterButtons";
import { Header } from "../../../../components/header/src/Header";

const defaultClass = 'form-design';

export const FormDesign = () => {

    // @ts-ignore
    const { formId } = useParams();
    const { getError, getLoading } = useDesignFormStore((state) => state.form);
    const isAuthenticated = sessionStorage.getItem('session');
    const dispatch = useDispatch();

    useEffect(() => {
        if (formId) {
            dispatch(getFormById(formId));
        }
    }, [formId, dispatch]);

    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            <Header />
            <div className={defaultClass}>
                <DndProvider backend={HTML5Backend} >
                    <SlideMenu>
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
