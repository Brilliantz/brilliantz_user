import React from 'react'
import {Button , Form } from "react-bootstrap";

const FormComp = ({success , handleSuccess}) => {
    // nilai success false

    const changeSuccess = () => {
        success = true;
        handleSuccess(success)
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
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                </div>
                <Button type="submit" className="mt-3 w-100" style={{height: '48px' , backgroundColor: '#4A47D6'}} onClick={changeSuccess}>
                    Kirim Link
                </Button>
            </Form>
        </div>
    )
}

export default FormComp
