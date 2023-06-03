import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { DesignForm } from "./pages/design-form/ui/src/design-form";

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
