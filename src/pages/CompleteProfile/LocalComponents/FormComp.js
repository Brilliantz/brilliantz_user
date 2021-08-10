import React from 'react'
import {Button , Form , InputGroup} from "react-bootstrap";

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
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label style={{fontSize: '14px'}}>Nama Lengkap</Form.Label>
                        <Form.Control type="text" placeholder="Nama Lengkap" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label style={{fontSize: '14px'}}>Jenis Kelamin</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option disabled selected>Pilih jenis kelamin</option>
                            <option value="lakilaki">Laki - Laki</option>
                            <option value="perempuan">Perempuan</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSchool">
                        <Form.Label style={{fontSize: '14px'}}>Asal Sekolah</Form.Label>
                        <Form.Control type="text" placeholder="Asal Sekolah" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicProvince">
                        <Form.Label style={{fontSize: '14px'}}>Provinsi</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option disabled selected>Pilih provinsi</option>
                            <option value="1">Jawa Timur</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCity">
                        <Form.Label style={{fontSize: '14px'}}>Kota / Kabupaten</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option disabled selected>Pilih kabupaten / kota</option>
                            <option value="surabaya">Surabaya</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicUniversity">
                        <Form.Label style={{fontSize: '14px'}}>Universitas Impian</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option disabled selected>Pilih univ impian</option>
                            <option value="pens">PENS</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMajor">
                        <Form.Label style={{fontSize: '14px'}}>Jurusan Impian</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option disabled selected>Pilih jurusan impian</option>
                            <option value="informatika">Informatika</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label style={{fontSize: '14px'}}>No HP / Whatsapp</Form.Label>
                        <Form.Control type="text" placeholder="No HP / Whatsapp" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicScreenshot">
                        <Form.Label style={{fontSize: '14px'}}>ScreenSchot bukti follow instagram @brilliantz_edu</Form.Label>
                        <Form.Control type="file" placeholder="Submit Foto" />
                    </Form.Group>
                    <Button type="submit" className="mt-3 w-100" style={{height: '48px' , backgroundColor: '#4A47D6'}} onClick={changeSuccess}>
                        Simpan & Selesai
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default FormComp
