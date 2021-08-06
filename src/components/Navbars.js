import React from 'react'
import { Container , Navbar } from 'react-bootstrap'
import Logo from "./Logo";

const Navbars = () => {
    return (
        <>
            <Navbar style={{height: '80px'}}>
                <Container>
                    <Navbar.Brand href="#home">
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {/* Signed in as: <a href="#login">Mark Otto</a> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars
