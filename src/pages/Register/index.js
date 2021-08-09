import React from 'react'
import { Container , Form , Button , InputGroup } from 'react-bootstrap'
import { useHistory } from 'react-router'

const Login = () => {
    const history = useHistory();
    return (
        <>
            <section style={{position: 'absolute' , top: '80px' , bottom: '0' , right: '0' , left: '0'}} className="d-flex">
                <section style={{width: '50%' , height: '100%'}}>
                    <Container  className="w-75 h-100 d-flex justify-content-center align-items-center">
                        <Form className="d-flex flex-column justify-content-between" style={{height: '450px'}}>
                            <div className="text">
                                <h1 className="mb-3" style={{fontSize: '32px'}}>Selamat Datang</h1>
                                <div className="noted" style={{lineHeight: '7px'}}>
                                    <p className="text-muted font-weight normal" style={{fontSize: '14px'}}>Isi data diri kamu di bawah untuk melakukan registrasi.</p>
                                    <p className="text-muted font-weight normal" style={{fontSize: '14px'}}>Sudah punya akun ? <span style={{color: '#4A47D6' , cursor: 'pointer'}} onClick={() => history.push('/login')}>Masuk ke akunmu</span></p>
                                </div>
                            </div>
                            <div className="inpt-group">
                                <Form.Group className="mb-3" controlId="formBasicNama">
                                    <Form.Label style={{fontSize: '14px'}}>Nama Lengkap</Form.Label>
                                    <Form.Control type="nama" placeholder="Nama Lengkap" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{fontSize: '14px'}}>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label style={{fontSize: '14px'}}>Password</Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="Example text with button addon"
                                            aria-describedby="basic-addon1"
                                            type="password" placeholder="Password"
                                        />
                                        <button id="button-addon1" style={{border: 'none'}}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.71 4.5399C2.32 4.1499 2.32 3.5199 2.71 3.1299C3.1 2.7399 3.74 2.7399 4.13 3.1299L20.44 19.4599C20.83 19.8499 20.83 20.4799 20.44 20.8699C20.05 21.2599 19.42 21.2599 19.03 20.8699L16.31 18.1499C14.97 18.6699 13.52 18.9699 12 18.9699C7 18.9699 2.73 15.8599 1 11.4699C1.77 9.4999 3.06 7.7999 4.68 6.5099L2.71 4.5399ZM17 11.4699C17 8.7099 14.76 6.4699 12 6.4699C11.49 6.4699 11 6.5699 10.53 6.7099L8.36 4.5399C9.51 4.1699 10.73 3.9699 12 3.9699C17 3.9699 21.27 7.0799 23 11.4599C22.31 13.2199 21.21 14.7599 19.82 15.9899L16.76 12.9299C16.9 12.4699 17 11.9799 17 11.4699ZM12 16.4699C9.24 16.4699 7 14.2299 7 11.4699C7 10.6999 7.18 9.9699 7.49 9.3299L9.06 10.8999C9.03 11.0799 9 11.2699 9 11.4699C9 13.1299 10.34 14.4699 12 14.4699C12.2 14.4699 12.38 14.4399 12.57 14.3999L14.14 15.9699C13.49 16.2899 12.77 16.4699 12 16.4699ZM14.97 11.1399C14.82 9.7399 13.72 8.6499 12.33 8.4999L14.97 11.1399Z" fill="#252D30"/>
                                            </svg>
                                        </button>
                                    </InputGroup>
                                </Form.Group>
                            </div>

                            <Button type="submit" className="mt-3 w-100" style={{height: '48px' , backgroundColor: '#4A47D6'}}>
                                Registrasi Akun
                            </Button>
                            
                        </Form>
                    </Container>
                </section>
                <section style={{width: '50%' , height: '100%' , backgroundColor: '#4A47D6'}}>
                    <Container className="w-75 h-100 d-flex justify-content-start align-items-center">
                        <div style={{width: '413px' , height: '302px' , marginLeft: '50px'}} className="d-flex flex-column justify-content-evenly">
                            <h1 style={{fontSize: '48px'}} className="text-light">Brilliantz</h1>
                            <h6 style={{fontSize: '16px'}} className="text-light">Sobat kamu untuk mempersiapkan UTBK</h6>
                            <div>
                                <h1 style={{fontSize: '48px'}} className="text-dark bg-light p-2 d-inline-block">Webinar Session.</h1>
                                <h1 style={{fontSize: '48px'}} className="text-dark bg-light p-2 d-inline-block">Try Out Online.</h1>
                            </div>
                        </div>
                    </Container>
                </section>
            </section>
        </>
    )
}

export default Login
