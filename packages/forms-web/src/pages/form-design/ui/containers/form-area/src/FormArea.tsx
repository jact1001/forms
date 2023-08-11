import '../styles/form-area.scss';
import { ReactNode } from "react";
import { SectionHeader } from "./FormArea.SectionHeader";
import { SectionArea } from "./FormArea.SectionArea";
import { SaveButton } from "./FormArea.SaveButton";
import { StartTimeLine } from "../components/time-line/src/StartTimeLine";
import {EndTimeLine} from "../components/time-line/src/EndTimeLine";

interface IFormArea {
    sectionArea: ReactNode;
    sectionHeader: ReactNode;
    formSaveButton: ReactNode;
}

const defaultClass = 'form-area';

const FormArea = ({ sectionArea, sectionHeader, formSaveButton }: IFormArea) => {
    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__section-container`}>
                <StartTimeLine />
                <div className={`${defaultClass}__form-section`}>
                    {sectionHeader}
                    {sectionArea}
                </div>
                <EndTimeLine />
            </div>
            {formSaveButton}
        </div>

    )
}

FormArea.SectionHeader = SectionHeader;
FormArea.SectionArea = SectionArea;
FormArea.SaveButton = SaveButton;

export default FormArea;
