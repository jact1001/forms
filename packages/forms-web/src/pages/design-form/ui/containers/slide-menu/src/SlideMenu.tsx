import React, { ReactNode } from 'react';
import '../styles/slide-menu.scss';
import { SlideMenuFormsLogo } from "./SlideMenu.FormsLogo";
import { SlideMenuFormTitle } from "./SlideMenu.FormTitle";
import { AddTitle } from "./SlideMenu.AddTitle";
import { SlideMenuDragInputs } from "./SlideMenu.DragInputs";

interface ISlideMenu {
    children: ReactNode;
}

const defaultClass = 'slide-menu';

const SlideMenu = ({ children }: ISlideMenu) => {

    return (
        <div className={defaultClass}>
            {children}
        </div>
    )
}

SlideMenu.Logo = SlideMenuFormsLogo;
SlideMenu.FormTitle = SlideMenuFormTitle;
SlideMenu.AddTitle = AddTitle;
SlideMenu.DragInputMenu = SlideMenuDragInputs;

export default SlideMenu;
