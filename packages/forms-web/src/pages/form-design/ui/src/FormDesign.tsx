import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../styles/form-design.scss';
import SlideMenu from "../containers/slide-menu/src/SlideMenu";
import FormArea from "../containers/form-area/src/FormArea";

const defaultClass = 'form-design';

export const FormDesign = () => {

    return (
        <div className={defaultClass}>
            <DndProvider backend={HTML5Backend} >
                <SlideMenu>
                    <SlideMenu.Logo />
                    <SlideMenu.FormTitle />
                    <SlideMenu.AddTitle />
                    <SlideMenu.DragInputMenu />
                </SlideMenu>
                <div className={`${defaultClass}__sections-container`}>
                    <div className="timeline">
                        <div className="event">
                            <div className="circle"/>
                        </div>
                    </div>
                    <FormArea
                        sectionHeader={<FormArea.SectionHeader />}
                        sectionArea={<FormArea.SectionArea />}
                        formSaveButton={<FormArea.SaveButton />}
                    />
                </div>
            </DndProvider>
        </div>
    )
}
