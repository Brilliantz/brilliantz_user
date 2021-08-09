import React from 'react'
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import {Login , Register , ForgotPassword , Dashboard} from "../../pages";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/forgotpass">
                    <ForgotPassword />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
