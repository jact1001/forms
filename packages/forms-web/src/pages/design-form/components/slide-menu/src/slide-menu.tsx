import { DragInputMenu } from '../components/drag-input-menu/drag-input-menu';
import { FormTitle } from '../components/form-title/form-title';
import { LogoForms } from '../components/logo-forms/logo-forms';
import { TitleAddInput } from '../components/title-add-input/title-add-input';
import '../styles/slide-menu.scss';

export const SlideMenu = () => {

    return (
        <div className="slide-menu">
            <LogoForms />
            <FormTitle />
            <TitleAddInput />
            <DragInputMenu />
        </div>
    )
    
}
