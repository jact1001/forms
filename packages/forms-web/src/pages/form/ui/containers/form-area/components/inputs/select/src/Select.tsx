
import React, {ChangeEvent, FocusEvent, useState} from 'react';
import { useDispatch } from 'react-redux';
//import { updateSectionField } from '../../../../../../../data/state/effects/form.effect';
import { IOptionValue, ISelect } from "../../../../../../../data/domain/IFormFields";
import '../styles/select.scss';

const defaultClass = 'select-group';
/*
interface ISelectProps extends ISelect {
    sectionId?: string;
}*/

export const Select = () => {

        return (
            <div className={defaultClass}>
                <label htmlFor="cars">Choose a car:</label>
                <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        )

}
