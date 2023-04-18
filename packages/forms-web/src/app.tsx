import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {SearchBar} from "./components/search-bar/search-bar";
import './app.css';
import {ItemList} from "./components/item-list/item-list";
import {ItemDetail} from "./components/item-detail/item-detail";
import {Breadcrumb} from "./components/breadcrumb/breadcrumb";
import { FieldsMenu } from "./pages/form-page/components/fields-menu/fields-menu";
import {Hola} from "./components/form/hola";

function App() {

    return (
        <Router>
            <SearchBar/>
            <Breadcrumb/>
            <Switch>
                <Route exact path='/items/:id'>
                    <ItemDetail/>
                </Route>
                <Route exact path='/items'>
                    <ItemList/>
                </Route>
            </Switch>
            <Hola/>
            <FieldsMenu/>
        </Router>
    );
}

export default App;
