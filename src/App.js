import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import ReleasesPage from "./components/ReleasesPage";
import StoriesPage from "./components/StoriesPage";

import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <PrivateRoute path="/releases" component={ReleasesPage} />
                <PrivateRoute path="/stories" component={StoriesPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
