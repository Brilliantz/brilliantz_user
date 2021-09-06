import React from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from "./Logo";
import styled from "styled-components";

const Navbars = ({size}) => {
    return (
        <>
            {
                window.location.pathname === "/dashboard" ? (
                    <span></span>
                ) : (
                    <Navbar style={{height: '80px' , backgroundColor: 'white'}} className="border" fixed="top" expand="lg">
                        <CustomContainer className="d-flex justify-content-between align-items-center">
                            <Navbar.Brand href="/login">
                                <Logo />
                            </Navbar.Brand>
                            {
                                window.location.pathname === "/login" || window.location.pathname === "/register" ? (
                                    <span></span>
                                ) : (
                                    <div>
                                        <Navbar.Toggle />
                                        <Navbar.Collapse className="justify-content-end">
                                            <Navbar.Text>
                                                {
                                                    window.location.pathname === "/payment" ? (
                                                        <div className="account d-flex align-items-center justify-content-end">
                                                            <div style={{width: '32px' , height: '32px' , backgroundColor: '#FFB332' , borderRadius: '50%'}}></div>
                                                            <span>Muhammad Ridlo</span>
                                                        </div>
                                                    ) : (
                                                        <span></span>
                                                    )
                                                }
                                            </Navbar.Text>
                                        </Navbar.Collapse>
                                    </div>
                                )
                            }
                        </CustomContainer>
                    </Navbar>
                )
            }
        </>
    )
}

const CustomContainer = styled.div`
    width: 95%;
    margin: auto;
`;

export default Navbars
