import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { DesignForm } from "./pages/form-design/ui/src/form-design";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path='/form-design'>
                    <DesignForm/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
