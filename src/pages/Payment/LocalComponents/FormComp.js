import React, { useState, useEffect } from 'react'
import { Button, Form, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import BNILogo from "../../../assets/BNILogo.png";
import MandiriLogo from "../../../assets/MandiriLogo.png"
import BRILogo from "../../../assets/BRILogo.png"
import OVOLogo from "../../../assets/OVOLogo.png"
import BCALogo from "../../../assets/BCALogo.png"
import GoPayLogo from "../../../assets/GoPayLogo.png"
import DanaLogo from "../../../assets/DanaLogo.png"
import fire from "../../../config/firebase"
import swal from "sweetalert2"

const FormComp = ({ success, handleSuccess, size }) => {
    let dataUser
    if (localStorage.key("dataUser")) {
        dataUser = JSON.parse(localStorage.getItem("dataUser"))
    }
    const [dataFoto, setDataFoto] = useState("")
    const [dataProgram, setDataProgram] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [selectedPayment, setSelectPayment] = useState({data: "" , label: ""});
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

        if (dataFoto !== "") {
            // kirim data gambar ke firebase storage
            uploadTask = fire.storage().ref().child(`transaksi/${dataUser.displayName === null ? "anonim" : dataUser.displayName}-${dataFoto.target.files[0].name}`).put(dataFoto.target.files[0])
            uploadTask.then(snapshot => {
                snapshot.ref.getDownloadURL().then(response => {
    
                    // kirim data ke firebase collection transaksi
                    fire.firestore().collection("transaksi").add({
                        bayar_via: selectedPayment.data,
                        bukti_pembayaran: response,
                        created_at: new Date(),
                        harga: dataProgram.harga,
                        nama_lengkap: dataUser.displayName,
                        program_id: pathname[3],
                        status: "Pending", // nanti status bakal diganti dari admin
                        tipe_program: pathname[2],
                        updated_at: new Date(),
                        user_id: dataUser.uid,
                    })
                        .then(() => {
                            success = true;
                            handleSuccess(success)
                        })
                })
            })
        } else {
            swal.fire({
                icon: 'error',
                title: 'Anda belum memasukkan bukti transfer',
            })
        }

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
        <div className={`${size.width < 550 ? "" : "d-flex"}`} style={{ width: `${size.width < 500 ? "100%" : "600px"}`, height: `${size.width < 500 ? "auto" : "auto"}` }}>
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
                                        <Button type="submit" disabled={selectedPayment.data === "" ? true : false} className="mt-3 w-100" style={{ height: '48px', backgroundColor: '#4A47D6' }} onClick={sendData}>
                                            Unggah Foto
                                        </Button>
                                    </div>
                                </div>
                                <hr />

                                {/* pilih metode pembayaran */}
                                <p className="my-0 text-secondary">Metode Pembayaran</p>
                                <Dropdown>
                                    <Dropdown.Toggle 
                                        variant="outline-secondary" 
                                        id="dropdown-menu-align-responsive-1"
                                        className="w-100"
                                    >
                                        { selectedPayment.data === "" ? "Pilih Metode Pembayaran" : selectedPayment.label }
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="w-100">
                                        <Dropdown.Item className="d-flex align-items-center" onClick={() => setSelectPayment({data: "BNI" , label: "BNI - 842618134 a/n Zulfikar Juan Pramasta"})} >
                                            <DropDownItem icon={BNILogo} /> BNI - 842618134 a/n Zulfikar Juan Pramasta
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex align-items-center" onClick={() => setSelectPayment({data: "BRI" , label: "BRI - 33401020559539 a/n Zaidan Alvin Alhanif"})} >
                                            <DropDownItem icon={BRILogo} /> BRI - 33401020559539 a/n Zaidan Alvin Alhanif
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex align-items-center" onClick={() => setSelectPayment({data: "Mandiri" , label: "Mandiri - 1560000919698 a/n Agus Umaryanto"})} >
                                            <DropDownItem icon={MandiriLogo} /> Mandiri - 1560000919698 a/n Agus Umaryanto
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex align-items-center" onClick={() => setSelectPayment({data: "BCA" , label: "BCA - 770871123 a/n Royyan Nurbiksa Jaka Pratama"})} >
                                            <DropDownItem icon={BCALogo} /> BCA - 770871123 a/n Royyan Nurbiksa Jaka Pratama
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex align-items-center" onClick={() => setSelectPayment({data: "OVO" , label: "OVO - 085746156526 a/n Firdiyanti Al Ma'idha"})} >
                                            <DropDownItem icon={OVOLogo} /> OVO - 085746156526 a/n Firdiyanti Al Ma'idha
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex align-items-center" onClick={() => setSelectPayment({data: "GoPay" , label: "Gopay - 081542203141 a/n Royyan Nurbiksa Jaka Pratama"})} >
                                            <DropDownItem icon={GoPayLogo} /> Gopay - 081542203141 a/n Royyan Nurbiksa Jaka Pratama
                                        </Dropdown.Item>
                                        <Dropdown.Item className="d-flex align-items-center" onClick={() => setSelectPayment({data: "Dana" , label: "Dana - 085803753325 a/n Zaidan Alvin Alhanif"})} >
                                            <DropDownItem icon={DanaLogo} /> Dana - 085803753325 a/n Zaidan Alvin Alhanif
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form>
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default FormComp
