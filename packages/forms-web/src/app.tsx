import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './app.css';
import { DesignForm } from "./pages/design-form/src/design-form";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path='/design-form'>
                    <DesignForm/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
