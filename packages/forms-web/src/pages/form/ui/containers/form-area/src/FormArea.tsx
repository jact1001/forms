import '../styles/form-area.scss';
import {SectionHeader} from "./FormArea.SectionHeader";
import {SectionArea} from "./FormArea.SectionArea";
import {TimeLine} from "../components/time-line/src/TimeLine";
import { ISection } from '../../../../data/domain/IUseCase';

const defaultClass = 'form-section-container';

interface IFormSection {sections?: ISection[]}

const FormArea = ({sections}:IFormSection) => {
    return (
        <>
            {sections?.map((section)=>{
                return(
                    <div className={`${defaultClass}`}>
                        <SectionHeader sectionName={section.sectionName} />
                        <SectionArea fields={section.fields} sectionId={section.id}
                    />
                </div>
                )
            })}
        </>
    )
}
export default FormArea;
