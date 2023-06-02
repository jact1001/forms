import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BuildForm } from '../components/build-form/src/build-form';
import '../styles/design-form.scss';
import SlideMenu from "../components/slide-menu/src/slide-menu";

export const DesignForm = () => {

    return (
        <div className="design-form">
            <DndProvider backend={HTML5Backend} >
                <SlideMenu>
                    <SlideMenu.Logo />
                    <SlideMenu.FormTitle />
                    <SlideMenu.TitleAddInput />
                    <SlideMenu.DragInputMenu />
                </SlideMenu>
                <BuildForm />
            </DndProvider>
        </div>
    )
}
