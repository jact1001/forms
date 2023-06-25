import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { FormDesign } from "./pages/form-design/ui/src/FormDesign";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path='/form-design'>
                    <FormDesign/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
