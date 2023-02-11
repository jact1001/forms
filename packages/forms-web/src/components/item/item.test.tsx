import {createMemoryHistory} from "history";
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils";
import {Item} from "./item";
import React from "react";
import {Router} from "react-router-dom";

let container: any = null;
const history = createMemoryHistory();
const route = '/items?search=pollo';
history.push(route);

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renderiza un item', ()=>{
    let item = {
        "id": "MLA23335332",
        "title": "BMW1200",
        "price": {
            "currency": "COP",
            "amount": 60000000
        },
        "picture": "",
        "condition": "new",
        "free_shipping": false,
        "address": "Cll 127C #5-28, Bogotá DC"
    };
    act(()=>{
        render(<Router history={history}> <Item item={item} /> </Router>, container)
    })
    expect(container.getElementsByClassName('ml-item__detail-wrapper__description').item(0).textContent).toEqual('BMW1200');
})


it('Dirige al componente detail al hacer click sobre la imagen de un producto', ()=>{
    let item = {
        "id": "MLA23335332",
        "title": "BMW1200",
        "price": {
            "currency": "COP",
            "amount": 60000000
        },
        "picture": "",
        "condition": "new",
        "free_shipping": false,
        "address": "Cll 127C #5-28, Bogotá DC"
    };
    act(()=>{
        render(<Router history={history}> <Item item={item}/> </Router>, container)
    });
    const productImage = container.querySelector('a');
    expect(productImage.href).toBe('http://localhost/items/MLA23335332');
})
