import React from 'react'
import { Navbar } from 'react-bootstrap'
import Logo from "./Logo";
import styled from "styled-components";

const Navbars = () => {
    return (
        <>
            <Navbar style={{height: '80px'}} className="border">
                <CustomContainer>
                    <Navbar.Brand href="#home">
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {/* Signed in as: <a href="#login">Mark Otto</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </CustomContainer>
            </Navbar>
        </>
    )
}

const CustomContainer = styled.div`
    width: 95%;
    margin: auto;
`;

export default Navbars
