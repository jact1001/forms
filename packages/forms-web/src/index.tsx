import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {store} from "./store";
import swDev from "./swDev";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_CLIENT_ID || '';

ReactDOM.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <Provider store={store}>
                <App/>
            </Provider>
        </GoogleOAuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
swDev();
reportWebVitals();
