import React, { useState } from 'react'
import { Container, Form, Button, InputGroup , Spinner} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Slogan, EyeClose, EyeOpen } from "../../components";
import fire from "../../config/firebase";
import swal from "sweetalert2"

const Login = ({size}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show , setShow] = useState(false);
    const [status , setStatus] = useState(false);

    const submit = () => {
        fire.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                fire.auth().onAuthStateChanged((user) => {
                    localStorage.setItem("dataUser" , JSON.stringify(user));
                    setStatus(true);
                    // setelah get user yang aktif , cek photoURLnya di user aktif dan detail profil di firestore 
                    // kosong apa ngga kalo kosong arahkan ke /complete-profile , kalo ngga arahkan ke /dashboard
                    fire.firestore().collection("users").doc(user.uid).get().
                    then(userDetail => {
                        if ((user.photoURL === null) || (!userDetail.exists)) { window.location.href = "/complete-profile" }
                        else { window.location.href = "/dashboard" }
                    })
                });
            }).catch(e => {
                if (e.code === 'auth/user-not-found') {
                    swal.fire({
                        icon: 'error',
                        title: 'Anda belum mendaftarkan akun',
                        text: 'Silahkan mendaftar akun terlebih dahulu',
                    })
                } else if (e.code === 'auth/wrong-password') {
                    swal.fire({
                        icon: 'error',
                        title: 'Password anda salah',
                        text: 'Pastikan anda memasukkan password yang benar',
                    })
                }
            })
    }

    const history = useHistory();
    return (
        <>
            <section style={{ position: 'absolute', top: '80px', bottom: '0', right: '0', left: '0' }} className="d-flex">
                <section style={{ width: `${size.width < 700 ? '100%' : '50%'}`, height: '100%' }}>
                    <Container className="w-75 h-100 d-flex justify-content-center align-items-center">
                        <Form className="d-flex flex-column justify-content-between">
                            <div className="text">
                                <h1 style={{ fontSize: '32px' }} className="mb-3">Hai Ketemu Lagi</h1>
                                <div className="noted" style={{lineHeight: `${size.width < 1000 ? "normal" : "7px"}`}}>
                                    <p style={{ fontSize: '14px' }} className="text-muted font-weight normal">Isi email dan password di bawah untuk login ke akunmu</p>
                                    <p style={{ fontSize: '14px' }} className="text-muted font-weight normal">Belum punya akun ? <span style={{ margin: '0', color: '#4A47D6', cursor: 'pointer' }} onClick={() => history.push('/register')}>Daftar dulu yuk</span></p>
                                </div>
                            </div>
                            <div className="inpt-group">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ fontSize: '14px' }}>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{ fontSize: '14px' }}>Password</Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="Example text with button addon"
                                            aria-describedby="basic-addon1"
                                            type={show === false ? "password" : "text"} placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button id="button-addon1" style={{ border: 'none' }} type="button" onClick={() => setShow(!show)}>
                                            { show === false ? <EyeClose /> : <EyeOpen /> }
                                        </button>
                                    </InputGroup>
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Text onClick={() => history.push('/forgot-pass')} style={{ cursor: 'pointer' }}>
                                        Forgot Password ?
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <Button className="mt-3 w-100" style={{ height: '48px', backgroundColor: '#4A47D6' }} onClick={() => submit()}>
                                {
                                    status ? (
                                        <Spinner animation="border" variant="light" />
                                    ) : (
                                        <span>Masuk</span>
                                    )
                                }
                            </Button>
                        </Form>
                    </Container>
                </section>
                {size.width < 700 ? (
                    <span></span>
                ) : (
                    <Slogan size={size} />
                )}
            </section>
        </>
    )
}

export default Login
