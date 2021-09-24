import React from 'react'
import {BrowserRouter as Router , Route , Switch , Redirect} from "react-router-dom";
import {LandingPage , Login , Register , ForgotPassword , CompleteProfile , Payment , Dashboard, TryOut} from "../../pages";
import {Navbars} from "../../components";
import styled from "styled-components"

const Routes = ({size}) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Navbars size={size} />
                    <LandingPage size={size} />
                </Route>
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
                    <Payment size={size} container={CustomContainer} />
                </Route>
                <Route path="/dashboard">
                    <Dashboard size={size} />
                </Route>
                <Route exact path="/tryout">
                    <Navbars size={size} />
                    <TryOut size={size} />
                </Route>
                <Route exact path="*">
                    {localStorage.key("dataUser") ? <Redirect to="/dashboard" /> : <Redirect to="/login" /> }
                </Route>
            </Switch>
        </Router>
    )
}

const CustomContainer = styled.div`
    width: 95%;
    margin: auto;
`;

export default Routes
