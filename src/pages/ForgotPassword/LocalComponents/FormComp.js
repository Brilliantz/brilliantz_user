import React , {useState} from 'react'
import {Button , Form } from "react-bootstrap";
import fire from "../../../config/firebase";
import swal from "sweetalert2";

const FormComp = ({success , handleSuccess}) => {
    const [email , setEmail] = useState("");

    const changeSuccess = () => {
        fire.auth().sendPasswordResetEmail(email)
        .then(() => {
            success = true;
            handleSuccess(success)
        })
        .catch(error => {
            if (error.code === "auth/user-not-found") {
                swal.fire({
                    icon: 'error',
                    title: 'Alamat email tidak ditemukan',
                    text: 'Pastikan anda memasukkan alamat email yang terdaftar',
                })
            }
        })
    }

    return (
        <div>
            <Form className="d-flex flex-column justify-content-between" style={{height: '280px' , width: '400px'}}>
                <div className="text">
                    <h1 style={{fontSize: '32px'}} className="mb-3">Lupa password akun ? </h1>
                    <div className="noted" style={{lineHeight: '7px'}}>
                        <p style={{fontSize: '14px'}} className="text-muted font-weight normal">Tenang isi email di bawah dan kami akan mengirimkan link</p>
                        <p style={{fontSize: '14px'}} className="text-muted font-weight normal">untuk mereset password ke email.</p>
                    </div>
                </div>
                <div className="inpt-group">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontSize: '14px'}}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                </div>
                <Button className="mt-3 w-100" style={{height: '48px' , backgroundColor: '#4A47D6'}} onClick={changeSuccess}>
                    Kirim Link
                </Button>
            </Form>
        </div>
    )
}

export default FormComp
