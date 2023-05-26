import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { SlideMenu } from '../components/slide-menu/src/slide-menu';
import { BuildForm } from '../components/build-form/src/build-form';
import '../styles/design-form.scss';

export const DesignForm = () => {

    return (
        <DndProvider backend={HTML5Backend} >
            <div className="design-form">
                <SlideMenu />
                <BuildForm />
            </div>
        </DndProvider>
    )
}
