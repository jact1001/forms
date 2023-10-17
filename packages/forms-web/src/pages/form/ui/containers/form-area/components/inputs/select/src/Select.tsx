
import React, {ChangeEvent, FocusEvent, useState} from 'react';
import { useDispatch } from 'react-redux';

import { ISelect } from "../../../../../../../data/domain/IFormFields";
import '../styles/select.scss';

const defaultClass = 'select-group';
/*
interface ISelectProps extends ISelect {
    sectionId?: string;
}*/

export const Select = ({values}: ISelect) => {

    return (
    <>
        <div >
            <select className={`${defaultClass}`}>
                {values.map((value) => {
                return (
                    <option value={value.id} >
                        {value.text}
                    </option>
                )
        })}
        </select>
        </div>
    </>
    )
}
