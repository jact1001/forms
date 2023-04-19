import React from 'react';
import back from '../../../../../../assets/Icon_Back.svg';
import forward from '../../../../../../assets/Icon_Forward.svg';
import './form-title.scss';

export const FormTitle = () => {

    const title : String = 'Aa';

    return (
        <div className='form-title'>
            <h1>{title}</h1>
            <div>
                <a className=""><img src={back} alt="add" className="form-title__icon" /></a>
                <a className=""><img src={forward} alt="add" className="form-title__icon" /></a>
            </div>
        </div>
    )
}
