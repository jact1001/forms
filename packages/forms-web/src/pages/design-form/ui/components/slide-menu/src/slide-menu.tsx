import React, { ReactNode } from 'react';
import '../styles/slide-menu.scss';
import { LogoForms } from "../components/logo-forms/logo-forms";
import { FormTitle } from "../components/form-title/form-title";
import { TitleAddInput } from "../components/title-add-input/title-add-input";
import { DragInputMenu } from "../components/drag-input-menu/drag-input-menu";

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

SlideMenu.Logo = LogoForms;
SlideMenu.FormTitle = FormTitle;
SlideMenu.TitleAddInput = TitleAddInput;
SlideMenu.DragInputMenu = DragInputMenu;

export default SlideMenu;
