import '../styles/form-area.scss';
import {SectionHeader} from "./FormArea.SectionHeader";
import {SectionArea} from "./FormArea.SectionArea";
import {AddSectionButton} from "./FormArea.AddSectionButton";
import {TimeLine} from "../components/time-line/src/TimeLine";
import {useDesignFormStore} from "../../../../data/hooks/custom-typed-selector";

const defaultClass = 'form-area';

const FormArea = () => {

    const {form: {sections}} = useDesignFormStore((state) => state.form);

    return (
        <div className={defaultClass}>
            {sections?.map(({id, fields, sectionName, access}, index) => {
                return (
                    <div className={`${defaultClass}__section-container`}>
                        {index === 0 ? <TimeLine type='start'/> : <TimeLine type='line'/>}
                        <div className={`${defaultClass}__form-section`}>
                            <SectionHeader sectionId={id} sectionName={sectionName} access={access} sectionsLength={sections.length} />
                            <SectionArea sectionFields={fields} sectionId={id} />
                        </div>
                        {index === sections.length - 1 ? <TimeLine type='end'/> : <TimeLine type='line'/>}
                    </div>
                )
            })}
            <AddSectionButton />
        </div>
    )
}
export default FormArea;
