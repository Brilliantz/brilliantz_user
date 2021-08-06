import React from 'react'
import { Container , Form , Button } from 'react-bootstrap'

const Login = () => {
    return (
        <>
            <section style={{position: 'absolute' , top: '80px' , bottom: '0' , right: '0' , left: '0'}} className="d-flex">
                <section style={{width: '50%' , height: '100%'}}>
                    <Container  className="w-75 h-100 d-flex justify-content-center align-items-center">
                        <Form>
                            <div className="text mb-4">
                                <h4 className="mb-3">Hai Ketemu Lagi</h4>
                                <div className="noted" style={{lineHeight: '7px'}}>
                                    <p className="text-muted font-weight normal">Isi email dan password di bawah untuk login ke akunmu</p>
                                    <p className="text-muted font-weight normal">Belum punya akun ? <span style={{color: '#4A47D6'}}>Daftar dulu yuk</span></p>
                                </div>
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Text className="text-decoration-underline">
                                    Forgot Password ?.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Masuk
                            </Button>
                        </Form>
                    </Container>
                </section>
                <section style={{width: '50%' , height: '100%' , backgroundColor: '#4A47D6'}}>
                    <Container className="w-75 h-100 d-flex justify-content-start align-items-center">
                        <div style={{width: '413px' , height: '302px' , marginLeft: '50px'}} className="d-flex flex-column justify-content-evenly">
                            <h2 className="text-light">Brilliantz</h2>
                            <h6 className="text-light">Sobat kamu untuk mempersiapkan UTBK</h6>
                            <div>
                                <h1 className="text-dark bg-light p-2 d-inline-block">Webinar Session.</h1>
                                <h1 className="text-dark bg-light p-2 d-inline-block">Try Out Online.</h1>
                            </div>
                        </div>
                    </Container>
                </section>
            </section>
        </>
    )
}

export default Login
