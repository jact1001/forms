import React from "react";
import {SearchBar} from "./search-bar";
import {Router} from 'react-router-dom';
import {mount} from 'enzyme';
import {createMemoryHistory} from "history";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store'

const mockStore = configureStore();

describe('search tests', () => {
    const history = createMemoryHistory();
    const route = '/items/MLA123654895';
    history.push(route);
    const wrapper = mount(
        <Provider store={mockStore()}>
            <Router history={history}>
                <SearchBar/>
            </Router>
        </Provider>,
    );
    xtest('retorna el texto del input', () => {
        const search = wrapper.children().find('input').simulate('keypress', {key: 'Enter'})
        console.log(search);
    })

    xtest('retorna el texto del input al hacer click en el botón', async () => {
        const button = wrapper.find('button').at(0);
        console.log(button.html());
        const input = wrapper.find('input');
        input.simulate('keypress', {key: 'Enter'})
        console.log(input.html());
        console.log(input.text());
    })

})
