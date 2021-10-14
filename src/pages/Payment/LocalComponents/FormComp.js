import React, { useState, useEffect } from 'react'
import { Button, Form, DropdownButton, ButtonGroup, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styles from "./FormComp.module.css";
import BNILogo from "../../../assets/BNILogo.png";
import MandiriLogo from "../../../assets/MandiriLogo.png"
import BRILogo from "../../../assets/BRILogo.png"
import OVOLogo from "../../../assets/OVOLogo.png"
import fire from "../../../config/firebase"

const FormComp = ({ success, handleSuccess, size }) => {
    let dataUser
    if (localStorage.key("dataUser")) {
        dataUser = JSON.parse(localStorage.getItem("dataUser"))
    }
    const [dataFoto, setDataFoto] = useState("")
    const [dataProgram, setDataProgram] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [selectedPayment, setSelectPayment] = useState("");
    const history = useHistory();

    let pathname = window.location.pathname.split("/")
    useEffect(() => {
        // get data webinar / tryout
        fire.firestore().collection(pathname[2]).doc(pathname[3]).get()
            .then(doc => {
                if (doc.exists) {
                    setDataProgram(doc.data())
                    setLoading(false)
                }
            })
            .catch(err => console.log("err", err))
    }, [pathname])


    const sendData = (e) => {
        e.preventDefault()
        let uploadTask

        // kirim data gambar ke firebase storage
        uploadTask = fire.storage().ref().child(`transaksi/${dataUser.displayName === null ? "anonim" : dataUser.displayName}-${dataFoto.target.files[0].name}`).put(dataFoto.target.files[0])
        uploadTask.then(snapshot => {
            snapshot.ref.getDownloadURL().then(response => {

                // kirim data ke firebase collection transaksi
                fire.firestore().collection("transaksi").add({
                    bayar_via: selectedPayment,
                    bukti_pembayaran: response,
                    created_at: new Date(),
                    harga: dataProgram.harga,
                    nama_lengkap: dataUser.displayName,
                    program_id: pathname[3],
                    status: "", // nanti status bakal diganti dari admin
                    tipe_program: pathname[2],
                    updated_at: "", // sejalan dengan tergantinya property status
                    user_id: dataUser.uid,
                })
                    .then(() => {
                        success = true;
                        handleSuccess(success)
                    })
            })
        })
    }

    const DropDownItem = (props) => {
        const Icon = props.icon;
        return (
            <div className="d-flex align-items-center my-3">
                <img src={Icon} alt="icon" className="mx-3" style={{ width: '30px', height: '30px' }} />
                <b>{props.label}</b>
            </div>
        )
    }

    return (
        <div className={`${size.width < 550 ? "" : "d-flex"}`} style={{ width: `${size.width < 500 ? "100%" : "500px"}`, height: `${size.width < 500 ? "auto" : "auto"}` }}>
            {
                loading ? (<span>Loading ...</span>) : (
                    <>
                        <div className="back" style={{ width: '15%', cursor: 'pointer' }} onClick={() => history.push('/dashboard')}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.0552 14.6733H10.1618L16.6685 8.16662C17.1885 7.64661 17.1885 6.79328 16.6685 6.27328C16.4194 6.02361 16.0812 5.8833 15.7285 5.8833C15.3758 5.8833 15.0376 6.02361 14.7885 6.27328L6.00182 15.0599C5.48182 15.5799 5.48182 16.4199 6.00182 16.9399L14.7885 25.7266C15.3085 26.2466 16.1485 26.2466 16.6685 25.7266C17.1885 25.2066 17.1885 24.3666 16.6685 23.8466L10.1618 17.3399H25.0552C25.7885 17.3399 26.3885 16.7399 26.3885 16.0066C26.3885 15.2733 25.7885 14.6733 25.0552 14.6733Z" fill="#252D30" />
                            </svg>
                        </div>
                        <div style={{ width: `${size.width < 550 ? "100%" : "85%"}` }}>
                            <Form className="d-flex flex-column w-100 h-100 justify-content-between">
                                <div className="form-area d-flex flex-column justify-content-between">
                                    <div className="text">
                                        <h1 style={{ fontSize: '32px' }} className="mb-4">Unggah Bukti Pembayaran </h1>
                                        <div className="noted" style={{ lineHeight: '7px' }}>
                                            <p style={{ fontSize: '16px' }} className="text-muted font-weight normal">Silahkan upload bukti pembayaran untuk melakukan</p>
                                            <p style={{ fontSize: '16px' }} className="text-muted font-weight normal">pendaftaran [Nama Program] </p>
                                        </div>
                                    </div>
                                    <div className="inpt-group">
                                        <Form.Group className="mb-3" controlId="formBasicImage">
                                            <Form.Control type="file" placeholder="Klik untuk memilih gambar" onChange={(e) => setDataFoto(e)} />
                                        </Form.Group>
                                        <Button type="submit" disabled={selectedPayment === "" ? true : false} className="mt-3 w-100" style={{ height: '48px', backgroundColor: '#4A47D6' }} onClick={sendData}>
                                            Unggah Foto
                                        </Button>
                                    </div>
                                </div>
                                <hr />

                                {/* pilih metode pembayaran */}
                                <p className="my-0 text-secondary">Metode Pembayaran</p>
                                <DropdownButton
                                    as={ButtonGroup}
                                    title={`${selectedPayment === "" ? "Pilih Metode Pembayaran" : selectedPayment}`}
                                    id="dropdown-menu-align-responsive-1"
                                    variant="outline-secondary"
                                >
                                    <Dropdown.Item onClick={() => setSelectPayment("BNI")}><DropDownItem icon={BNILogo} label="BNI" /></Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectPayment("Mandiri")}><DropDownItem icon={MandiriLogo} label="Mandiri" /></Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectPayment("BRI")}><DropDownItem icon={BRILogo} label="BRI" /></Dropdown.Item>
                                    <Dropdown.Item onClick={() => setSelectPayment("OVO")}><DropDownItem icon={OVOLogo} label="OVO" /></Dropdown.Item>
                                </DropdownButton>

                                <div className="payment-step mt-4">
                                    <h1 style={{ fontSize: '24px' }}>Tata Cara Pembayaran</h1>
                                    {
                                        selectedPayment === "OVO" ? (
                                            <ul className="p-0">
                                                <li className="d-flex align-items-center" style={{ listStyle: 'none', width: '450px' }}>
                                                    <div style={{ width: '22px', height: '22px', backgroundColor: '#4A47D6', borderRadius: '50%', margin: '10px 0' }} className="d-flex justify-content-center align-items-center text-white">1</div>
                                                    <div style={{ marginLeft: '10px' }}>Transfer</div>
                                                </li>
                                                <li style={{ listStyle: 'none' }}><div className={`${styles.divider} ${styles.grey}`}></div></li>
                                                <li className="d-flex align-items-center" style={{ listStyle: 'none', width: '450px' }}>
                                                    <div style={{ width: '22px', height: '22px', backgroundColor: '#4A47D6', borderRadius: '50%', margin: '10px 0' }} className="d-flex justify-content-center align-items-center text-white">2</div>
                                                    <div style={{ marginLeft: '10px' }}>Ke Sesama OVO</div>
                                                </li>
                                                <li style={{ listStyle: 'none' }}><div className={`${styles.divider} ${styles.grey}`}></div></li>
                                                <li className="d-flex align-items-center" style={{ listStyle: 'none', width: '450px' }}>
                                                    <div style={{ width: '22px', height: '22px', backgroundColor: '#4A47D6', borderRadius: '50%', margin: '10px 0' }} className="d-flex justify-content-center align-items-center text-white">3</div>
                                                    <div style={{ marginLeft: '10px' }}>Masukkan nomor 085746156526 <b>a.n Firdi</b></div>
                                                </li>
                                                <li style={{ listStyle: 'none' }}><div className={`${styles.divider} ${styles.grey}`}></div></li>
                                                <li className="d-flex align-items-center" style={{ listStyle: 'none', width: '450px' }}>
                                                    <div style={{ width: '22px', height: '22px', backgroundColor: '#4A47D6', borderRadius: '50%', margin: '10px 0' }} className="d-flex justify-content-center align-items-center text-white">4</div>
                                                    <div style={{ marginLeft: '10px' }}>Masukkan Nominal Transfer</div>
                                                </li>
                                                <li style={{ listStyle: 'none' }}><div className={`${styles.divider} ${styles.grey}`}></div></li>
                                                <li className="d-flex align-items-center" style={{ listStyle: 'none', width: '450px' }}>
                                                    <div style={{ width: '22px', height: '22px', backgroundColor: '#4A47D6', borderRadius: '50%', margin: '10px 0' }} className="d-flex justify-content-center align-items-center text-white">5</div>
                                                    <div style={{ marginLeft: '10px' }}>Lanjutkan</div>
                                                </li>
                                            </ul>
                                        ) : (
                                            <ul className="p-0">
                                                <li className="d-flex align-items-center" style={{ listStyle: 'none', width: '450px' }}>
                                                    <div style={{ width: '22px', height: '22px', backgroundColor: '#4A47D6', borderRadius: '50%', margin: '10px 0' }} className="d-flex justify-content-center align-items-center text-white">1</div>
                                                    <div style={{ marginLeft: '10px' }}>
                                                        Masukkan nomor rekening tujuan berikut,
                                                        <br /> 0842618134 <b>a.n Zulfikar Juan Pramasta</b>.</div>
                                                </li>
                                                <li style={{ listStyle: 'none' }}><div className={`${styles.divider} ${styles.grey}`}></div></li>
                                                <li className="d-flex align-items-center" style={{ listStyle: 'none', width: '450px' }}>
                                                    <div style={{ width: '22px', height: '22px', backgroundColor: '#4A47D6', borderRadius: '50%', margin: '10px 0' }} className="d-flex justify-content-center align-items-center text-white">2</div>
                                                    <div style={{ marginLeft: '10px' }}>Masukkan jumlah yang harus dibayar.</div>
                                                </li>
                                                <li style={{ listStyle: 'none' }}><div className={`${styles.divider} ${styles.grey}`}></div></li>
                                                <li className="d-flex align-items-center" style={{ listStyle: 'none', width: '450px' }}>
                                                    <div style={{ width: '22px', height: '22px', backgroundColor: '#4A47D6', borderRadius: '50%', margin: '10px 0' }} className="d-flex justify-content-center align-items-center text-white">3</div>
                                                    <div style={{ marginLeft: '10px' }}>Foto dan unggah bukti transfer di website.</div>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </div>
                            </Form>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default FormComp
