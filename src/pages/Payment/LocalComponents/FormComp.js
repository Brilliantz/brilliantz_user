import React from 'react'
import {Button , Form } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import styles from "./FormComp.module.css";

const FormComp = ({success , handleSuccess}) => {
    // nilai success false

    const history = useHistory();

    const changeSuccess = () => {
        success = true;
        handleSuccess(success)
    }

    return (
        <div className="d-flex" style={{width: '536px' , height: '516px'}}>
            <div className="back h-100" style={{width: '15%', cursor: 'pointer'}} onClick={() => history.push('/dashboard')}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.0552 14.6733H10.1618L16.6685 8.16662C17.1885 7.64661 17.1885 6.79328 16.6685 6.27328C16.4194 6.02361 16.0812 5.8833 15.7285 5.8833C15.3758 5.8833 15.0376 6.02361 14.7885 6.27328L6.00182 15.0599C5.48182 15.5799 5.48182 16.4199 6.00182 16.9399L14.7885 25.7266C15.3085 26.2466 16.1485 26.2466 16.6685 25.7266C17.1885 25.2066 17.1885 24.3666 16.6685 23.8466L10.1618 17.3399H25.0552C25.7885 17.3399 26.3885 16.7399 26.3885 16.0066C26.3885 15.2733 25.7885 14.6733 25.0552 14.6733Z" fill="#252D30"/>
                </svg>
            </div>
            <div style={{width: '90%'}}>
                <Form className="d-flex flex-column w-100 h-100 justify-content-between">
                    <div className="form-area d-flex flex-column justify-content-between">
                        <div className="text">
                            <h1 style={{fontSize: '32px'}} className="mb-4">Unggah Bukti Pembayaran </h1>
                            <div className="noted" style={{lineHeight: '7px'}}>
                                <p style={{fontSize: '16px'}} className="text-muted font-weight normal">Silahkan upload bukti pembayaran untuk melakukan</p>
                                <p style={{fontSize: '16px'}} className="text-muted font-weight normal">pendaftaran [Nama Program] </p>
                            </div>
                        </div>
                        <div className="inpt-group">
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Control type="file" placeholder="Klik untuk memilih gambar" />
                            </Form.Group>
                            <Button type="submit" className="mt-3 w-100" style={{height: '48px' , backgroundColor: '#4A47D6'}} onClick={changeSuccess}>
                                Unggah Foto
                            </Button>
                        </div>
                    </div>
                    <hr />
                    <div className="payment-step">
                        <h1 style={{fontSize: '24px'}}>Tata Cara Pembayaran</h1>
                        <ul className="p-0">
                            <li className="d-flex align-items-center" style={{listStyle: 'none' , width: '450px'}}>
                                <div style={{width: '22px' , height: '22px' , backgroundColor: '#4A47D6' , borderRadius: '50%' , margin: '10px 0'}} className="d-flex justify-content-center align-items-center text-white">1</div>
                                <div style={{marginLeft: '10px'}}>
                                    Masukkan nomor rekening tujuan berikut, 1234 567 890 
                                    <br /> a.n Brilliantz Edu.</div>
                            </li>
                            <li style={{listStyle: 'none'}}><div className={`${styles.divider} ${styles.grey}`}></div></li>
                            <li className="d-flex align-items-center" style={{listStyle: 'none' , width: '450px'}}>
                                <div style={{width: '22px' , height: '22px' , backgroundColor: '#4A47D6' , borderRadius: '50%' , margin: '10px 0'}} className="d-flex justify-content-center align-items-center text-white">2</div>
                                <div style={{marginLeft: '10px'}}>Masukkan jumlah yang harus dibayar.</div>
                            </li>
                            <li style={{listStyle: 'none'}}><div className={`${styles.divider} ${styles.grey}`}></div></li>
                            <li className="d-flex align-items-center" style={{listStyle: 'none' , width: '450px'}}>
                                <div style={{width: '22px' , height: '22px' , backgroundColor: '#4A47D6' , borderRadius: '50%' , margin: '10px 0'}} className="d-flex justify-content-center align-items-center text-white">3</div>
                                <div style={{marginLeft: '10px'}}>Foto dan unggah bukti transfer di website.</div>
                            </li>
                        </ul>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default FormComp
