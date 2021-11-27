import React , {createContext, useState} from 'react'
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import {LandingPage , Login , Register , ForgotPassword , CompleteProfile , Payment , Dashboard, InExam} from "../../pages";
import {Navbars} from "../../components";
import styled from "styled-components"

export const titleContext = createContext()    

const Routes = ({size}) => {
    const [namaBidang , setNamaBidang] = useState("")
    const dispatch = (namaBidangBaru) => {
        return setNamaBidang(namaBidangBaru)
    }
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
                <Route path="/in-exam">
                    <titleContext.Provider value={{ state: namaBidang , dispatch: dispatch }}>
                        <Navbars size={size} />
                        <InExam />
                    </titleContext.Provider>
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