import '../styles/time-line.scss';
import classNames from 'classnames';
import React from "react";

const defaultClass = 'time-line';

interface TimeLinePros {
    type: 'start' | 'end' | 'line';
}

export const TimeLine = ({type}: TimeLinePros) => {

    const classes = classNames(defaultClass, {
        [`${defaultClass}__start`]: type === 'start',
        [`${defaultClass}__end`]: type === 'end',
        [`${defaultClass}__line`]: type === 'line'
    });

    return (
        <div className={classes}></div>
    )

}
