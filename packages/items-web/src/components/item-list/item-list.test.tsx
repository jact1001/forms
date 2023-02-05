import {createMemoryHistory} from "history";
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";
import {ItemList} from "./item-list";
import React from "react";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from 'redux-mock-store';
import * as selector from "../../hooks/custom-typed-selector";

const middlewares: any = [];
const mockStore = configureMockStore(middlewares);

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
let container: any = null;
const history = createMemoryHistory();
const route = '/items?search=R3';
history.push(route);

jest.spyOn(selector, 'useCustomTypedSelector');

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    jest.spyOn(selector, 'useCustomTypedSelector').mockReturnValue({
        items: items,
        loading: false,
        error: null
    });
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renderiza la lista con los items encotrados', ()=>{
    act(()=>{
        render(<Provider store={mockStore()}><Router history={history}> <ItemList/> </Router></Provider>, container)
    })
    expect(container.getElementsByClassName('ml-item').length).toEqual(4);
})

it('Dirige al componente detail al hacer click sobre la imagen de un producto', ()=>{
    act(()=>{
        render(<Provider store={mockStore()}><Router history={history}> <ItemList/> </Router></Provider>, container)
    });
    const productImage = container.querySelector('a');
    expect(productImage.href).toBe('http://localhost/items/MLA123654895');
})
