import '../styles/section-header.scss';
import React from "react";

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
