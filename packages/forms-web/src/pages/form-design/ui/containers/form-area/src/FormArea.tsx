import '../styles/form-area.scss';
import { ReactNode } from "react";
import { SectionHeader } from "./FormArea.SectionHeader";
import { SectionArea } from "./FormArea.SectionArea";
import { SaveButton } from "./FormArea.SaveButton";
import { TimeLine } from "../components/time-line/src/TimeLine";
import { AddSectionButton } from "./FormArea.AddSectionButton";

interface IFormArea {
    sectionArea: ReactNode;
    sectionHeader: ReactNode;
    formSaveButton: ReactNode;
    addSectionButton: ReactNode;
}

const defaultClass = 'form-area';

const FormArea = ({ sectionArea, sectionHeader, formSaveButton, addSectionButton }: IFormArea) => {
    return (
        <div className={defaultClass}>
            <div className={`${defaultClass}__section-container`}>
                <TimeLine type='start' />
                <div className={`${defaultClass}__form-section`}>
                    {sectionHeader}
                    {sectionArea}
                </div>
                <TimeLine type='line' />
            </div>
            <div className={`${defaultClass}__section-container`}>
                <TimeLine type='line' />
                <div className={`${defaultClass}__form-section`}>
                    {sectionHeader}
                    {sectionArea}
                </div>
                <TimeLine type='end' />
            </div>
            {addSectionButton}
            {formSaveButton}
        </div>

    )
}

FormArea.SectionHeader = SectionHeader;
FormArea.SectionArea = SectionArea;
FormArea.SaveButton = SaveButton;
FormArea.AddSectionButton = AddSectionButton;

export default FormArea;
