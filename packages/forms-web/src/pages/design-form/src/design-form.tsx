import { SlideMenu } from "../components/slide-menu/src/slide-menu";
import { BuildForm } from "../components/build-form/src/build-form";
import '../styles/design-form.scss';

export const DesignForm = () => {

    return (
        <div className="design-form">
            <SlideMenu />
            <BuildForm />
        </div>
    )
}
