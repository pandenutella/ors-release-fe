import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
