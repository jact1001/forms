import '../styles/footer-buttons.scss';
import { useDispatch } from "react-redux";


import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { toast } from 'react-toastify';


const defaultClass = 'footer-buttons';

export const FooterButtons = () => {


    return (
        <div className={defaultClass}>
            <button type="button">Click Me!</button>
        </div>
    )
}
