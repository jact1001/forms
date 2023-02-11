import { createMemoryHistory } from 'history';
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {ItemDetail} from "./item-detail";
import React from "react";
import { Router } from 'react-router-dom';
import {Provider} from "react-redux";
import * as selector from "../../hooks/custom-typed-selector";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

let item = {
    "author": {
        "name": "Ivan",
        "lastname": "Taimal"
    },
    "item": {
        "id": "MLA123654895",
        "title": "BMW1200",
        "price": {
            "currency": "COP",
            "amount": 60000000
        },
        "picture": "",
        "condition": "new",
        "free_shipping": false,
        "sold_quantity": 250,
        "description": "exelente condición",
        "address": "Cll 127C #5-28, Bogotá DC"
    }

};
let container: any = null;
const history = createMemoryHistory();
const route = '/items/MLA123654895';
history.push(route);


jest.spyOn(selector, 'useCustomTypedSelector');

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.mock('react-redux', () => ({
        ...jest.requireActual('react-redux'),
        useDispatch: () => jest.fn(() => Promise.resolve([{ id: 1, username: 'foo' }])),
    }));
    jest.spyOn(selector, 'useCustomTypedSelector').mockReturnValue({
        detail: item,
        loading: false,
        error: null
    });
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renderiza correctamente el detalle', () => {
    act(() => {
        render(
            <Provider store={mockStore()}>
                <Router history={history}>
                    <ItemDetail/>
                </Router>
            </Provider>, container
        );
    });
    expect(container.getElementsByClassName("ml-item-detail__title-wrapper__title").item(0).textContent).toBe("BMW1200");
})
