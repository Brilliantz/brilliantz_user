import React from 'react'
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import {Login , Register , ForgotPassword , CompleteProfile , Payment , Dashboard} from "../../pages";
import {Navbars} from "../../components";

const Routes = ({size}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <Navbars size={size} />
                    <Login size={size} />
                </Route>
                <Route exact path="/register">
                    <Navbars size={size} />
                    <Register size={size} />
                </Route>
                <Route exact path="/forgot-pass">
                    <Navbars size={size} />
                    <ForgotPassword />
                </Route>
                <Route exact path="/complete-profile">
                    <Navbars size={size} />
                    <CompleteProfile size={size} />
                </Route>
                <Route exact path="/payment">
                    <Navbars size={size} />
                    <Payment size={size} />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard size={size} />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
