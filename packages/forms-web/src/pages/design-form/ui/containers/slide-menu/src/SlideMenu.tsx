import React, { ReactNode } from 'react';
import '../styles/slide-menu.scss';
import { SlideMenuFormsLogo } from "./SlideMenu.FormsLogo";
import { SlideMenuFormTitle } from "./SlideMenu.FormTitle";
import { AddTitle } from "./SlideMenu.AddTitle";
import { SlideMenuDragInputs } from "./SlideMenu.DragInputs";

interface ISlideMenu {
    children: ReactNode;
}

const SlideMenu = ({ children }: ISlideMenu) => {

    return (
        <div className="slide-menu">
            {children}
        </div>
    )
}

SlideMenu.Logo = SlideMenuFormsLogo;
SlideMenu.FormTitle = SlideMenuFormTitle;
SlideMenu.AddTitle = AddTitle;
SlideMenu.DragInputMenu = SlideMenuDragInputs;

export default SlideMenu;
