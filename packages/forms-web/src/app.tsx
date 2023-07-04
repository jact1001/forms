import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { DesignForm } from "./pages/form-design/ui/src/form-design";
import { Userforms } from "./pages/user-forms/ui/src/user-forms";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path='/form-design'>
                    <DesignForm/>
                </Route>
                <Route exact path='/user-forms'>
                    <Userforms/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
