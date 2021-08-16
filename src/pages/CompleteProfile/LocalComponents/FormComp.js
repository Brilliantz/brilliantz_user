import React from 'react'
import {Button , Form} from "react-bootstrap";

const FormComp = ({success , handleSuccess}) => {
    // nilai success false

    const changeSuccess = () => {
        success = true;
        handleSuccess(success)
    }

    return (
        <div style={{height: '935px' , width: '635px'}} className="mt-4">
            <h1 style={{fontSize: '32px'}}>Lengkapi Profil</h1>
            <Form className="d-flex justify-content-between mt-3">
                <div className="d-flex flex-column" style={{width: '35%'}}>
                    <img src="https://jdihn.jenepontokab.go.id/images/user/no-image.png" alt="profil-preview" style={{height: '200px'}} className="w-100 border rounded"/>
                    <Button variant="outline-secondary" className="my-3 w-100">Pilih Foto</Button>{' '}
                    <p style={{fontSize: '12px'}}>Gunakan foto dengan format .JPG , .PNG , .JPEG dengan ukuran file maksimal 3 MB</p>
                </div>

                <div style={{width: '55%'}}>
                    <Input text="Nama Lengkap" type="text" />
                    <Select label="Jenis Kelamin" defaultValue="Pilih jenis kelamin" data="PENS" />
                    <Input text="Asal Sekolah" type="text" />
                    <Select label="Provinsi" defaultValue="Pilih provinsi" data="Jawa Timur" />
                    <Select label="Kota / Kabupaten" defaultValue="Pilih kota / kabupaten" data="Surabaya" />
                    <Select label="Jurusan Impian" defaultValue="Pilih jurusan impian" data="Informatika" />
                    <Input text="No HP / Whatsapp" type="text" />
                    <Input text="ScreenSchot bukti follow instagram @brilliantz_edu" type="file" />
                    <Button type="submit" className="mt-3 w-100" style={{height: '48px' , backgroundColor: '#4A47D6'}} onClick={changeSuccess}>Simpan & Selesai</Button>
                </div>
            </Form>
        </div>
    )
}

const Input = ({text , type}) => {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label style={{fontSize: '14px'}}>{text}</Form.Label>
                <Form.Control type={type} placeholder={text} />
            </Form.Group>  
        </>
    )
}

const Select = ({label , defaultValue , data}) => {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label style={{fontSize: '14px'}}>{label}</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option disabled defaultValue>{defaultValue}</option>
                    <option value="pens">{data}</option>
                </Form.Select>
            </Form.Group>
        </>
    )
}

export default FormComp
