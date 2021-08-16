import React from 'react'
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import {Login , Register , ForgotPassword , CompleteProfile , Payment , Dashboard} from "../../pages";
import {Navbars} from "../../components";

const Routes = ({size}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <Navbars />
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Navbars />
                    <Register />
                </Route>
                <Route exact path="/forgot-pass">
                    <Navbars />
                    <ForgotPassword />
                </Route>
                <Route exact path="/complete-profile">
                    <Navbars />
                    <CompleteProfile />
                </Route>
                <Route exact path="/payment">
                    <Navbars />
                    <Payment />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard size={size} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
