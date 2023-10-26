import '../styles/section-header.scss';

import { useDispatch } from "react-redux";

import React, { ChangeEvent, useEffect } from "react";


import { IOption, SelectWithCheckbox } from "../components/select-with-checkbox/src/SelectWithCheckbox";

const defaultClass = 'form-section-header';

interface ISectionHeader {
  sectionName: String;
}

export const SectionHeader = ({sectionName}:ISectionHeader) => {

  return (
    <div className={`${defaultClass}`}>
      <div className={`${defaultClass}__section-name`}>
        {sectionName}
      </div>
    </div>

    )
}
