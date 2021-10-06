import React from 'react'
import {BrowserRouter as Router , Route , Switch , Redirect} from "react-router-dom";
import {LandingPage , Login , Register , ForgotPassword , CompleteProfile , Payment , Dashboard, InExam} from "../../pages";
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
                <Route path="/payment/tryout/key-tryout">
                    <Navbars size={size} />
                    <Payment size={size} container={CustomContainer} />
                </Route>
                <Route path="/dashboard">
                    <Dashboard size={size} />
                </Route>
                {/* <Route exact path="*">
                    {localStorage.key("dataUser") ? <Redirect to="/dashboard" /> : <Redirect to="/login" /> }
                </Route> */}

                <Route path="/in-exam">
                    <Navbars size={size} />
                    <InExam />
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
