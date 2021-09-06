import React, { useState , useEffect } from 'react'
import { Button, Form } from "react-bootstrap";
import fire from "../../../config/firebase"
import {SpinnerLoader} from "../../../components"
import axios from "axios";
import swal from "sweetalert2";

const FormComp = ({ success, handleSuccess, dataUser}) => {
    const [inputs , setInputs] = useState({});
    const [photoPreview , setPhotoPreview] = useState("");

    const [dataProvinsi , setDataProvinsi] = useState([]);
    const [loadingProvinsi , setLoadingProvinsi] = useState(true);

    const [dataKota , setDataKota] = useState([]);
    const [loadingKota , setLoadingKota] = useState(true);
    // get data provinsi
    useEffect(() => {
        axios.get('http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
        .then(response => {
            setDataProvinsi(response.data);
            setLoadingProvinsi(false);
        })
    } , [])

    const uploadImage = (e) => {
        e.preventDefault();
        let targetName = e.target.name;
        let imageName = e.target.files[0].name;
        let uploadTask;
        // upload screenshot
        if (targetName === "screenShot") {
            uploadTask = fire.storage().ref().child(`users/screenShot/${dataUser.displayName === null ? "anonim" : dataUser.displayName}-${imageName}`).put(e.target.files[0])
        } 
        // upload photo profile
        else if (targetName === "photoProfile") {
            if (e.target.files[0].size < 3000000) {
                uploadTask = fire.storage().ref().child(`users/photoProfile/${dataUser.displayName === null ? "anonim" : dataUser.displayName}-${imageName}`).put(e.target.files[0])
            } else {
                swal.fire({
                    icon: 'error' , 
                    title: 'File gambar anda melebihi 3 MB'
                })
                e.target.value = "";
                return;
            }
        }
        uploadTask.then(function(snapshot) {
            snapshot.ref.getDownloadURL().then(response => {
                if (targetName === "screenShot") {
                    setInputs({ ...inputs , screenShot: response})
                } else if (targetName === "photoProfile") {
                    setPhotoPreview(response);
                    setInputs({ ...inputs , photoProfile: response})
                    fire.auth().onAuthStateChanged(user => {
                        user.updateProfile({
                            photoURL: response,
                        }).then(() => {
                            localStorage.setItem("dataUser" , JSON.stringify(user))
                        })
                    })
                }
            })
        }).catch(error => {
            console.log("error snapshot" , error)
        })  
    }

    const pilihKotaProvinsi = (e) => {
        e.preventDefault();
        if (e.target.name === "provinsi") {
            let selectedProvince = dataProvinsi.filter(data => {
                return data.id === e.target.value
            })
            setInputs({...inputs , [e.target.name] : selectedProvince[0].name})
    
            // jalankan axios untuk get data kota sesuai id provinsi terpilih
            axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince[0].id}.json`)
            .then(response => {
                setDataKota(response.data);
                setLoadingKota(false);
            })
        } else if (e.target.name === "kabupaten") {
            let selectedCity = dataKota.filter(data => {
                return data.id === e.target.value
            })
            setInputs({...inputs , [e.target.name] : selectedCity[0].name});
        }
    }
    
    const jenisKelamin = [
        { id: "L", name: "Laki-Laki" },
        { id: "P", name: "Perempuan" },
    ]

    const sendData = (e) => {
        e.preventDefault();
        const db = fire.firestore();

        db.collection("users").doc(dataUser.uid).set({
            ...inputs,
            email: dataUser.email,
        })
        .then(() => {
            handleSuccess(!success);
        })
        .catch((error) => console.log("error" , error));
    }

    return (
        <div style={{ height: '935px', width: '635px' }} className="mt-4">
            <h1 style={{ fontSize: '32px' }}>Lengkapi Profil</h1>
            <Form className="d-flex justify-content-between mt-3" onSubmit={sendData} encType="multipart/form-data">
                <div className="d-flex flex-column" style={{ width: '35%' }}>
                    <img 
                        src={photoPreview === "" ? 
                            'https://jdihn.jenepontokab.go.id/images/user/no-image.png' 
                            : photoPreview} 
                        alt="profil-preview" 
                        style={{ height: '200px' }} 
                        className="w-100 border rounded" 
                    />
                    <Input text="" type="file" name="photoProfile" onChange={uploadImage} />
                    <p style={{ fontSize: '12px' }}>Gunakan foto dengan format .JPG , .PNG , .JPEG dengan ukuran file maksimal 3 MB</p>
                </div>

                <div style={{ width: '55%' }}>
                    <Input text="Nama Lengkap" type="text" name="nama_lengkap" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Select label="Jenis Kelamin" data={jenisKelamin} name="jenis_kelamin" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Input text="Asal Sekolah" type="text" name="asal_sekolah" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    {
                        loadingProvinsi ? (
                            <SpinnerLoader text="Loading data provinsi ... " />
                        ) : (
                            <Select label="Provinsi" data={dataProvinsi} name="provinsi" onChange={(e) => pilihKotaProvinsi(e)} />
                        )
                    }
                    {
                        loadingKota ? (
                            <div>
                                <Form.Label style={{ fontSize: '14px' }}>Kota / Kabupaten</Form.Label>
                                <SpinnerLoader text="Silahkan pilih provinsi dahulu ... " />
                            </div>
                        ) : (
                            <Select label="Kota / Kabupaten" data={dataKota} name="kabupaten" onChange={(e) => pilihKotaProvinsi(e)} />
                        )
                    }
                    
                    {/* sementara */}
                    <Input text="Universitas Impian" type="text" name="univ_impian" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Input text="Jurusan Impian" type="text" name="jurusan_impian" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    
                    
                    <Input text="No HP / Whatsapp" type="text" name="no_hp" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Input text="ScreenSchot bukti follow instagram @brilliantz_edu" type="file" name="screenShot" onChange={uploadImage} />    
                    <Button type="submit" className="mt-3 w-100" style={{ height: '48px', backgroundColor: '#4A47D6' }}>Simpan & Selesai</Button>
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
                <Form.Control type={type} placeholder={text} name={name} required={true} {...rest} />
            </Form.Group>
        </>
    )
}

const Select = ({ label, data, name, ...rest }) => {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: '14px' }}>{label}</Form.Label>
                <Form.Select name={name} required {...rest} >
                    <option>Pilih {label}</option>
                    {
                        data.map((e) => {
                            return (
                                <option value={e.id} key={e.id}>{e.name}</option>
                            )
                        })
                    }
                </Form.Select>
            </Form.Group>
        </>
    )
}

export default FormComp