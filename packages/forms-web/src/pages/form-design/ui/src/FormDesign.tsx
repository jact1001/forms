import React, {useEffect} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/form-design.scss';
import 'react-toastify/dist/ReactToastify.css';
import SlideMenu from "../containers/slide-menu/src/SlideMenu";
import FormArea from "../containers/form-area/src/FormArea";
import { useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from "react-redux";
import { getFormById } from "../../data/state/effects/form.effect";
import {useDesignFormStore} from "../../data/hooks/custom-typed-selector";

const defaultClass = 'form-design';

export const FormDesign = () => {

    // @ts-ignore
    const { formId } = useParams();
    const { getError } = useDesignFormStore((state) => state.form);
    const dispatch = useDispatch();

    useEffect(() => {
        if (formId) {
            dispatch(getFormById(formId));
        }
    }, [formId]);

    return (
        <div className={defaultClass}>
            <DndProvider backend={HTML5Backend} >
                <SlideMenu>
                    <SlideMenu.Logo />
                    <SlideMenu.FormTitle />
                    <SlideMenu.AddTitle />
                    <SlideMenu.DragInputMenu />
                </SlideMenu>
                {getError ?
                    <div>{getError}</div> :
                    <FormArea
                        formSaveButton={<FormArea.SaveButton />}
                        addSectionButton={<FormArea.AddSectionButton />}
                    />
                }
                <ToastContainer />
            </DndProvider>
        </div>
    )
}
