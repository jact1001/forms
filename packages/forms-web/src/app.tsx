import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserForms } from "./pages/user-forms/ui/src/user-forms";
import { FormDesign } from "./pages/form-design/ui/src/FormDesign";
import { Login } from "./pages/login/ui/src/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAccessAccepted } from "./pages/login/data/state/effects/login.effects";

function App() {

    const dispatch = useDispatch();
    const isAuthenticated = sessionStorage.getItem('session');

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(setAccessAccepted());
        }
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/user-forms' component={UserForms} />
                <Route exact path="/form-design/:formId?" component={FormDesign}/>
            </Switch>
        </Router>
    );
}

export default App;
