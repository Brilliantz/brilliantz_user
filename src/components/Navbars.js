import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import Logo from "./Logo";
import styled from "styled-components";
import { useHistory } from 'react-router';

const Navbars = ({ size }) => {
    let pathname = window.location.pathname
    const history = useHistory()
    return (
        <>
            {
                // set  pathname saat di /dashboard , hilangkan navbar 
                pathname === "/dashboard" ? (
                    <span></span>
                ) : (
                    <Navbar bg="white" expand="lg" className="border" fixed="top">
                        {
                            // set layout saat pathname di login , register , forgot-pass , payment 
                            pathname === "/login" || pathname === "/register" || pathname === "/forgot-pass" || pathname === "/payment" ? (
                                <CustomContainer className="d-flex justify-content-between align-items-center">
                                    <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                                    {
                                        // saat di bukan /payment , hilangkan info akun
                                        pathname === "/login" || pathname === "/register" || pathname === "/forgot-pass" ? (
                                            <span></span>
                                        ) :
                                            // saat di payment munculkan info akun diambil dari localStorage
                                            pathname === "/payment" ? (
                                                <div className="account d-flex align-items-center justify-content-end">
                                                    <div style={{ width: '32px', height: '32px', backgroundImage: `url(${JSON.parse(localStorage.getItem("dataUser")).photoURL})`, borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                                    <span>{JSON.parse(localStorage.getItem("dataUser")).displayName}</span>
                                                </div>
                                            ) : (<div></div>)
                                    }
                                </CustomContainer>
                            ) : (
                                // set saat pathname di landing page
                                pathname === "/" ? (
                                    <Container className="d-flex justify-content-between">
                                        <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                                        <Navbar.Toggle aria-controls="navbarScroll" />
                                        <Navbar.Collapse id="navbarScroll">
                                            <Nav
                                                className="m-auto my-2 my-lg-0"
                                                style={{ maxHeight: '150px' }}
                                                navbarScroll
                                            >
                                                <Nav.Link className="mx-3" href="#">Beranda</Nav.Link>
                                                <Nav.Link className="mx-3" href="#about">Tentang Brilliantz</Nav.Link>
                                                <Nav.Link className="mx-3" href="#program">Program-Program</Nav.Link>
                                                <Nav.Link className="mx-3" href="#kolaborasi">Kolaborasi</Nav.Link>
                                            </Nav>
                                            <div>
                                                <Button primary onClick={() => history.push("/register")}>Daftar</Button>
                                                <Button onClick={() => history.push("/login")}>Login</Button>
                                            </div>
                                        </Navbar.Collapse>
                                    </Container>
                                ) : (<div></div>)
                            )
                        }
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

const Button = styled.button`
    width: 90px;
    height: 40px;
    background-color: ${props => props.primary ? "#4A47D6" : "transparent"};
    color: ${props => props.primary ? "white" : "#4A47D6"};
    border: 2px solid #4A47D6;
    border-radius: 8px;
    margin-right: ${props => props.primary ? "10px" : ""};
`

export default Navbars
