import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login'
import CadPet from "./pages/CadPet";
import CadChar from "./pages/CadChar";
import AttPet from "./pages/AttPet";
import AttChar from "./pages/AttChar";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/cadPet" exact={true} component={CadPet} />
                <Route path="/cadChar" exact={true} component={CadChar} />
                <Route path="/attPet" exact={true} component={AttPet} />
                <Route path="/attChar" exact={true} component={AttChar} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;