import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserForms } from "./pages/user-forms/ui/src/user-forms";
import { FormDesign } from "./pages/form-design/ui/src/FormDesign";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path='/form-design/:formId?' component={FormDesign} />
                <Route exact path='/user-forms' component={UserForms} />
            </Switch>
        </Router>
    );
}

export default App;
