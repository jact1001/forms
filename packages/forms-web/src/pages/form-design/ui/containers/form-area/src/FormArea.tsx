import '../styles/form-area.scss';
import {ReactNode} from "react";
import {SectionHeader} from "./FormArea.SectionHeader";
import {SectionArea} from "./FormArea.SectionArea";
import {SaveButton} from "./FormArea.SaveButton";
import {AddSectionButton} from "./FormArea.AddSectionButton";
import {TimeLine} from "../components/time-line/src/TimeLine";
import {useDesignFormStore} from "../../../../data/hooks/custom-typed-selector";

interface IFormArea {
    formSaveButton: ReactNode;
    addSectionButton: ReactNode;
}

const defaultClass = 'form-area';

const FormArea = ({formSaveButton, addSectionButton}: IFormArea) => {

    const {form: {sections}} = useDesignFormStore((state) => state.form);

    return (
        <div className={defaultClass}>
            {sections?.map(({id, fields, sectionName, access}, index) => {
                return (
                    <div className={`${defaultClass}__section-container`}>
                        {index === 0 ? <TimeLine type='start'/> : <TimeLine type='line'/>}
                        <div className={`${defaultClass}__form-section`}>
                            <SectionHeader sectionId={id} sectionName={sectionName} access={access} />
                            <SectionArea sectionFields={fields} sectionId={id} />
                        </div>
                        {index === sections.length - 1 ? <TimeLine type='end'/> : <TimeLine type='line'/>}
                    </div>
                )
            })}
            {addSectionButton}
            {formSaveButton}
        </div>
    )
}

FormArea.SaveButton = SaveButton;
FormArea.AddSectionButton = AddSectionButton;

export default FormArea;
