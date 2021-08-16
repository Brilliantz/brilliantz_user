import React from 'react'
import { Breadcrumb , Button , Form} from 'react-bootstrap'
import style from "../../Dashboard.module.css";
import {LeftArrow} from "../../../../components/Icons"; 

const EditProfil = ({editProfil , handleBack}) => {
    return (
        <>
            <Breadcrumb style={{marginTop: '1rem'}} className={style.breadcrumb}>
                <Breadcrumb.Item >PROFIL</Breadcrumb.Item>
                <Breadcrumb.Item href="#">EDIT PROFIL</Breadcrumb.Item>
            </Breadcrumb>

            <div className="d-flex align-items-center mb-3" style={{width: '688px'}}>
                <Button variant="light" className="rounded" onClick={() => handleBack(false)}><LeftArrow /></Button>
                <h1 style={{fontSize: '32px' , marginLeft: '20px'}}>Edit Profil</h1>
            </div>

            <Form className="d-flex justify-content-between mt-3 p-4 rounded" style={{width: '688px' , backgroundColor: '#fff'}}>
                <div className="d-flex flex-column" style={{width: '35%'}}>
                    <img src="https://jdihn.jenepontokab.go.id/images/user/no-image.png" alt="profil-preview" style={{height: '200px' , borderRadius: '8px'}} className="w-100"/>
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
                    <Button type="submit" className="mt-3 w-100" style={{height: '48px' , backgroundColor: '#4A47D6'}}>Simpan & Selesai</Button>
                    <Button variant="outline-danger" className="mt-3 w-100" style={{height: '48px'}} onClick={() => handleBack(false)}>Batalkan</Button>
                </div>
            </Form>

        </>
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

export default EditProfil
