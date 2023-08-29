import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/form-design.scss';
import 'react-toastify/dist/ReactToastify.css';
import SlideMenu from "../containers/slide-menu/src/SlideMenu";
import FormArea from "../containers/form-area/src/FormArea";
import { useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

const defaultClass = 'form-design';

export const FormDesign = () => {

    // @ts-ignore
    const { productId } = useParams();

    if (productId) {

    }

    return (
        <div className={defaultClass}>
            <DndProvider backend={HTML5Backend} >
                <SlideMenu>
                    <SlideMenu.Logo />
                    <SlideMenu.FormTitle />
                    <SlideMenu.AddTitle />
                    <SlideMenu.DragInputMenu />
                </SlideMenu>
                <FormArea
                    formSaveButton={<FormArea.SaveButton />}
                    addSectionButton={<FormArea.AddSectionButton />}
                />
                <ToastContainer />
            </DndProvider>
        </div>
    )
}
