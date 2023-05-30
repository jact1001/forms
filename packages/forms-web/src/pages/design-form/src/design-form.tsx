import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SlideMenu } from '../components/slide-menu/src/slide-menu';
import { BuildForm } from '../components/build-form/src/build-form';
import '../styles/design-form.scss';

export const DesignForm = () => {

    return (
        <div className="design-form">
            <DndProvider backend={HTML5Backend} >
                <SlideMenu />
                <BuildForm />
            </DndProvider>
        </div>
    )
}
