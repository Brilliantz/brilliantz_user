import React from 'react'
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import {Login} from "../../pages";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
