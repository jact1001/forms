import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { DesignForm } from "./pages/form-desing/ui/src/form-desing";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path='/form-desing'>
                    <DesignForm/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
