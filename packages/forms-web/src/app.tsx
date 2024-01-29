import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { UserForms } from "./pages/user-forms/ui/src/UserForms";
import { FormDesign } from "./pages/form-design/ui/src/FormDesign";
import { Login } from "./pages/login/ui/src/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAccessAccepted } from "./pages/login/data/state/effects/login.effects";
import { Form } from "./pages/use-case/ui/src/Form";

function App() {

    const dispatch = useDispatch();
    const session = sessionStorage.getItem('session');

    useEffect(() => {
        if (session) {
            dispatch(setAccessAccepted());
        }
    }, [dispatch, session]);

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/login" />} />
                <Route exact path='/form/:caseId?' component={Form} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/user-forms' component={UserForms} />
                <Route exact path="/form-design/:formId?" component={FormDesign}/>
            </Switch>
        </Router>
    );
}

export default App;
