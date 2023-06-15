import React from "react";
import '../styles/radio.scss';

const defaultClass = 'radio';

export const Radio = ({label}: any) => {

    return (
        <div className={ `${defaultClass}` }>
            <label>{ label }</label>
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
        </div>
    )
}