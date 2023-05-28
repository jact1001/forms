import {render} from '@testing-library/react';
import App from './app';
import {Provider} from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import * as selector from "./hooks/custom-typed-selector";

const mockStore = configureStore();
jest.spyOn(selector, 'useCustomTypedSelector');

test('renders learn react link', () => {
    jest.spyOn(selector, 'useCustomTypedSelector').mockReturnValue({});
    render(
        <Provider store={mockStore()}>
            <App/>
        </Provider>
    );
});
