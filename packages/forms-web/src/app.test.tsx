import {render, screen} from '@testing-library/react';
import App from './app';
import {Provider} from "react-redux";
import React from "react";
import configureStore from "redux-mock-store";
import * as selector from "./hooks/custom-typed-selector";

const mockStore = configureStore();

const items = {
    "author": {
        "name": "Ivan",
        "lastname": "Taimal"
    },
    "categories": [
        "Motos y Carros",
        "Motos"
    ],
    "items": [
        {
            "id": "MLA123654895",
            "title": "BMW1200",
            "price": {
                "currency": "COP",
                "amount": 60000000
            },
            "picture": "",
            "condition": "new",
            "free_shipping": false,
            "address": "Cll 127C #5-28, Bogotá DC"
        },
        {
            "id": "MLA123654896",
            "title": "BMW1200",
            "price": {
                "currency": "COP",
                "amount": 60000000
            },
            "picture": "",
            "condition": "new",
            "free_shipping": false,
            "address": "Cll 127C #5-28, Bogotá DC"
        },
        {
            "id": "MLA123654897",
            "title": "BMW1200",
            "price": {
                "currency": "COP",
                "amount": 60000000
            },
            "picture": "",
            "condition": "new",
            "free_shipping": false,
            "address": "Cll 127C #5-28, Bogotá DC"
        },
        {
            "id": "MLA123654898",
            "title": "BMW1200",
            "price": {
                "currency": "COP",
                "amount": 60000000
            },
            "picture": "",
            "condition": "new",
            "free_shipping": false,
            "address": "Cll 127C #5-28, Bogotá DC"
        }
    ]
};
jest.spyOn(selector, 'useCustomTypedSelector');

test('renders learn react link', () => {
    jest.spyOn(selector, 'useCustomTypedSelector').mockReturnValue({
        items: items,
        loading: false,
        error: null
    });
    render(
        <Provider store={mockStore()}>
            <App/>
        </Provider>);
    const linkElement = screen.findAllByText('Nunca dejes de buscar');
    //expect(linkElement).toBeInTheDocument();
});
