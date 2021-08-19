import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";

const FormComp = ({ success, handleSuccess }) => {
    // nilai success false
    const [state, setState] = useState({
        foto_profil: "",
        nama_lengkap: "",
        jenis_kelamin: "",
        asal_sekolah: "",
        provinsi: "",
        kabupaten: "",
        universitas_impian: "",
        jurusan_impian: "",
        no_hp: "",
        screenshot: "",
    });

    const changeSuccess = () => {
        // success = true;
        // handleSuccess(success)
        console.log("state",state)
    }

    const dataDummy = [
        { id: 1, name: "Data 1", value: "data 1", },
        { id: 2, name: "Data 2", value: "data 2", },
        { id: 3, name: "Data 3", value: "data 3", },
    ]

    const screenShotUpload = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        if (reader !== undefined && file !== undefined) {
            reader.onloadend = () => {
                setState({...state , screenshot: reader.result})
            }
            reader.readAsDataURL(file);
        }
    }

    const profilePhotoUpload = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        if (reader !== undefined && file !== undefined) {
            reader.onloaden = () => {
                if (file.size < 3000000) {
                    setState({...state , foto_profil: reader.result})
                }
            }
            reader.readAsDataURL(file);
        }
    }


    return (
        <div style={{ height: '935px', width: '635px' }} className="mt-4">
            <h1 style={{ fontSize: '32px' }}>Lengkapi Profil</h1>
            <Form className="d-flex justify-content-between mt-3">
                <div className="d-flex flex-column" style={{ width: '35%' }}>
                    <img 
                        src={state.foto_profil === "" ? 
                            'https://jdihn.jenepontokab.go.id/images/user/no-image.png' 
                            : state.foto_profil} 
                        alt="profil-preview" 
                        style={{ height: '200px' }} 
                        className="w-100 border rounded" 
                    />
                    <Input text="" type="file" onChange={profilePhotoUpload} />
                    <p style={{ fontSize: '12px' }}>Gunakan foto dengan format .JPG , .PNG , .JPEG dengan ukuran file maksimal 3 MB</p>
                </div>

                <div style={{ width: '55%' }}>
                    <Input text="Nama Lengkap" type="text" onChange={(e) => setState({ ...state, nama_lengkap: e.target.value })} />
                    <Select label="Jenis Kelamin" data={dataDummy} onChange={(e) => setState({ ...state, jenis_kelamin: e.target.value })} />
                    <Input text="Asal Sekolah" type="text" onChange={(e) => setState({ ...state, asal_sekolah: e.target.value })} />
                    <Select label="Provinsi" data={dataDummy} onChange={(e) => setState({ ...state, provinsi: e.target.value })} />
                    <Select label="Kota / Kabupaten" data={dataDummy} onChange={(e) => setState({ ...state, kabupaten: e.target.value })} />
                    <Select label="Universitas Impian" data={dataDummy} onChange={(e) => setState({ ...state, universitas_impian: e.target.value })} />
                    <Select label="Jurusan Impian" data={dataDummy} onChange={(e) => setState({ ...state, jurusan_impian: e.target.value })} />
                    <Input text="No HP / Whatsapp" type="text" onChange={(e) => setState({ ...state, no_hp: e.target.value })} />
                    <Input text="ScreenSchot bukti follow instagram @brilliantz_edu" type="file" onChange={screenShotUpload} />
                    <Button className="mt-3 w-100" style={{ height: '48px', backgroundColor: '#4A47D6' }} onClick={() => changeSuccess()}>Simpan & Selesai</Button>
                </div>
            </Form>
        </div>
    )
}

const Input = ({ text, type, name, ...rest }) => {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: '14px' }}>{text}</Form.Label>
                <Form.Control type={type} placeholder={text} {...rest} />
            </Form.Group>
        </>
    )
}

const Select = ({ label, data, ...rest }) => {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: '14px' }}>{label}</Form.Label>
                <Form.Select {...rest} >
                    <option>Pilih kelamin</option>
                    {
                        data.map((e) => {
                            return (
                                <option value={e.value} key={e.id}>{e.name}</option>
                            )
                        })
                    }
                </Form.Select>
            </Form.Group>
        </>
    )
}

export default FormComp
