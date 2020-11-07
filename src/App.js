import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
