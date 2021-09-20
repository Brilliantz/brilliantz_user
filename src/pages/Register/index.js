import React , {useState} from 'react'
import { Container , Form , Button , InputGroup , Spinner } from 'react-bootstrap'
import { useHistory } from 'react-router'
import {EyeClose, Slogan , EyeOpen} from "../../components";
import fire from "../../config/firebase";
import swal from "sweetalert2";

const Register = ({size}) => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [show , setShow] = useState(false);
    const [status , setStatus] = useState(false)

    const submit = () => {
        swal.fire({
            icon: 'question',
            title: 'Yakin data yang diisikan benar ?',
            text: 'Pastikan alamat email benar dan aktif , kami akan mengirim email sewaktu-waktu',
            showConfirmButton: true,
            showCancelButton: true,
        }).then(respon => {
            if (respon.isConfirmed) {
                fire.auth().createUserWithEmailAndPassword(email,password)
                .then(() => {
                    setStatus(true)
                    fire.auth().onAuthStateChanged(user => {
                        user.updateProfile({
                            displayName: name,
                        }).then(() => {
                            localStorage.setItem("dataUser" , JSON.stringify(user))
                            window.location.href = "/complete-profile";
                        })
                    });
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        swal.fire({
                            icon: 'error',
                            title: 'Email telah dipakai di akun lainnya'
                        })
                    }
                }) 
            }
        })
    }
    
    const history = useHistory();
    return (
        <>
            <section style={{position: 'absolute' , top: '60px' , bottom: '0' , right: '0' , left: '0'}} className="d-flex">
                <section style={{width: `${size.width < 700 ? '100%' : '50%'}` , height: '100%'}}>
                    <Container  className="w-75 h-100 d-flex justify-content-center align-items-center">
                        <Form className="d-flex flex-column justify-content-between" style={{height: '450px'}}>
                            <div className="text">
                                <h1 className="mb-3" style={{fontSize: '32px'}}>Selamat Datang</h1>
                                <div className="noted" style={{lineHeight: `${size.width < 1000 ? "normal" : "7px"}`}}>
                                    <p className="text-muted font-weight normal" style={{fontSize: '14px'}}>Isi data diri kamu di bawah untuk melakukan registrasi.</p>
                                    <p className="text-muted font-weight normal" style={{fontSize: '14px'}}>Sudah punya akun ? <span style={{color: '#4A47D6' , cursor: 'pointer' , margin: '0'}} onClick={() => history.push('/login')}>Masuk ke akunmu</span></p>
                                </div>
                            </div>
                            <div className="inpt-group">
                                <Form.Group className="mb-3" controlId="formBasicNama">
                                    <Form.Label style={{fontSize: '14px'}}>Nama Lengkap</Form.Label>
                                    <Form.Control type="nama" placeholder="Nama Lengkap" onChange={(e) => setName(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{fontSize: '14px'}}>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label style={{fontSize: '14px'}}>Password</Form.Label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="Example text with button addon"
                                            aria-describedby="basic-addon1"
                                            type={show === false ? "password" : "text"} placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button id="button-addon1" style={{border: 'none'}} type="button" onClick={() => setShow(!show)}>
                                            { show === false ? <EyeClose /> : <EyeOpen /> }
                                        </button>
                                    </InputGroup>
                                </Form.Group>
                            </div>

                            <Button className="mt-3 w-100" style={{height: '48px' , backgroundColor: '#4A47D6'}} onClick={() => submit()} >
                                {
                                    status ? (
                                        <Spinner animation="border" variant="light" />
                                    ) : (
                                        <span>Registrasi Akun</span>
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

export default Register
