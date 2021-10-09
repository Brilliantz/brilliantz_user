import React, { useState, useEffect } from 'react'
import { Breadcrumb, Button, Form } from 'react-bootstrap'
import style from "../../Dashboard.module.css";
import { LeftArrow } from "../../../../components";
import fire from "../../../../config/firebase";
import swal from "sweetalert2";
import axios from "axios";

const EditProfil = (props) => {
    const [dataUser, setDataUser] = useState({
        nama_lengkap: props.data ? props.data.nama_lengkap : "",
        asal_sekolah: props.data ? props.data.asal_sekolah : "",
        kabupaten: props.data ? props.data.kabupaten : "",
        jurusan_impian: props.data ? props.data.jurusan_impian : "",
        email: props.data ? props.data.email : "",
        jenis_kelamin: props.data ? props.data.jenis_kelamin : "",
        provinsi: props.data ? props.data.provinsi : "",
        universitas_impian: props.data ? props.data.universitas_impian : "",
        no_hp: props.data ? props.data.no_hp : "",
        foto_profil: props.data ? props.data.foto_profil : "",
    })
    
    const [update , setUpdate] = useState({})

    const updateImage = (e) => {
        e.preventDefault();
        if (e.target.files[0].size < 3000000) {
            let uploadImage = fire.storage().ref().child(`users/photoProfile/${props.data.nama_lengkap}-${e.target.files[0].name}`).put(e.target.files[0]);
            uploadImage.then((snapshot) => {
                snapshot.ref.getDownloadURL().then(response => {
                    setUpdate({...update , foto_profil: response})
                    // mengubah di photoURL di onAuthStateChange dan set ke localStorage
                    fire.auth().onAuthStateChanged(user => {
                        user.updateProfile({
                            photoURL: response
                        }).then(() => {
                            localStorage.setItem("dataUser", JSON.stringify(user))
                            // mengubah foto profil di collection user
                            fire.firestore().collection("users").doc(user.uid).update({
                                ...update
                            })
                            // mengubah nilai di dataUser.foto_profil
                            .then(() => setDataUser((prevState) => ({...prevState , foto_profil: response})))
                        }).catch(error => console.log(error))
                    })
                }).catch(error => console.log("error", error))
            }).catch(error => console.log(error))
        } else {
            swal.fire({
                icon: 'error',
                title: 'File gambar anda melebihi 3 MB'
            })
            e.target.value = "";
            return;
        }
    }

    const handleInputState = (event) => {
        setDataUser((prevState) => (
            {...prevState, [event.target.name]: event.target.value}
        ))
        setUpdate({...update , [event.target.name] : event.target.value})
    }

    const submitUpdate = (e) => {
        e.preventDefault();
        fire.firestore().collection("users")
        .doc(JSON.parse(localStorage.getItem("dataUser")).uid).update({
            ...update
        }).then(() => {
            if (update.hasOwnProperty("nama_lengkap")) {
                fire.auth().onAuthStateChanged((user) => {
                    user.updateProfile({displayName: update.nama_lengkap})
                    .then(() => localStorage.setItem("dataUser" , JSON.stringify(user)))
                })
            }
            swal.fire({
                icon: 'success',
                title: 'Data berhasil diubah',
                showConfirmButton: true,
            }).then((res) => {
                if (res.isConfirmed) { window.location.href = "/dashboard" }
            })
        }).catch((error) => {
            console.log("error" , error)
        })
    }

    const [provinsi , setProvinsi] = useState([]);
    const [loadingProvinsi , setLoadingProvinsi] = useState(true);
    const [kota , setKota] = useState([]);
    const [loadingKota , setLoadingKota] = useState(false);

    useEffect(() => {
        axios.get("http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
        .then(response => {
            setProvinsi(response.data)
            setLoadingProvinsi(false)
            let filterProvinsi = response.data.filter(prov => prov.name === dataUser.provinsi); 
            axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${filterProvinsi[0].id}.json`)
            .then(res => {
                setKota(res.data)
            })
        })
    },[dataUser])

    const pilihProvinsiKota = (e) => {
        e.preventDefault();
        if (e.target.name === "provinsi") {
            setLoadingProvinsi(true)
            setLoadingKota(true)
            let selectedProvince = provinsi.filter(data => {
                return data.id === e.target.value
            })
            setUpdate({...update , [e.target.name] : selectedProvince[0].name})
            setDataUser({...dataUser , provinsi: selectedProvince[0].name})
            // jalankan axios untuk get data kota sesuai id provinsi terpilih
            axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince[0].id}.json`)
            .then(response => {
                setKota(response.data);
                setLoadingKota(false);
            })
        } else if (e.target.name === "kabupaten") {
            let selectedCity = kota.filter(data => {
                return data.id === e.target.value
            })
            setUpdate({...update , [e.target.name] : selectedCity[0].name});
            setDataUser({...dataUser , kabupaten : selectedCity[0].name});
        }
    }

    const jenisKelamin = [
        { id: "L", name: "Laki-Laki" },
        { id: "P", name: "Perempuan" },
    ]

    return (
        <>
            <Breadcrumb style={{ marginTop: '1rem' }} className={style.breadcrumb}>
                <Breadcrumb.Item >PROFIL</Breadcrumb.Item>
                <Breadcrumb.Item href="#">EDIT PROFIL</Breadcrumb.Item>
            </Breadcrumb>

            <div className="d-flex align-items-center mb-3">
                <Button variant="light" className="rounded" onClick={() => props.handleBack(false)}><LeftArrow /></Button>
                <h1 style={{ fontSize: '32px', marginLeft: '20px' }}>Edit Profil</h1>
            </div>

            <Form className={`${props.size.width < 920 ? '' : 'd-flex'} mt-3 p-4 rounded`} style={{ width: `${props.size.width < 950 ? '100%' : '688px'}`, backgroundColor: '#fff' }} onSubmit={submitUpdate} >
                <div className={`${props.size.width < 660 ? 'd-flex flex-column m-auto' : ''}`} style={{ width: '230px', marginRight: '30px' }}>
                    <img src={dataUser.foto_profil} alt="profil-preview" style={{ height: '200px', borderRadius: '8px' }} className="w-100" />
                    <Input text="" type="file" onChange={updateImage} />
                    <p style={{ fontSize: '12px' }}>Gunakan foto dengan format .JPG , .PNG , .JPEG dengan ukuran file maksimal 3 MB</p>
                </div>

                <div style={{ width: `${props.size.width < 920 ? '100%' : '55%'}` }}>
                    <Input label="Nama Lengkap" type="text" value={dataUser.nama_lengkap} name="nama_lengkap" onChange={handleInputState} />                   
                    <Select label="Jenis Kelamin" name="jenis_kelamin" selectedValue={dataUser.jenis_kelamin} data={jenisKelamin} onChange={handleInputState} />
                    <Input label="Asal Sekolah" type="text" value={dataUser.asal_sekolah} name="asal_sekolah" onChange={handleInputState} />                   
                    <Select label="Provinsi" name="provinsi" selectedValue={dataUser.provinsi} data={provinsi} onChange={pilihProvinsiKota} />
                    {
                        loadingKota ? (
                            <span>loading</span>
                        ) : (
                            <Select label="Kota / Kabupaten" name="kabupaten" selectedValue={`${loadingProvinsi ? 'Pilih kota' : dataUser.kabupaten}`} data={kota} onChange={pilihProvinsiKota} />
                        )
                    }
                    {/* univ & jurusan sementara masih inputan biasa */}
                    <Input label="Universitas Impian" type="text" value={dataUser.universitas_impian} name="universitas_impian" onChange={handleInputState} />                   
                    <Input label="Jurusan Impian" type="text" value={dataUser.jurusan_impian} name="jurusan_impian" onChange={handleInputState} />                   
                    <Input label="No HP" type="text" value={dataUser.no_hp} name="no_hp" onChange={handleInputState} />                   
                    <Button type="submit" className="mt-3 w-100" style={{ height: '48px', backgroundColor: '#4A47D6' }} disabled={Object.keys(update).length === 0 ? true : false} >Simpan & Selesai</Button>
                    <Button variant="outline-danger" className="mt-3 w-100" style={{ height: '48px' }} onClick={() => props.handleBack(false)}>Batalkan</Button>
                </div>
            </Form>
        </>
    )
}

const Input = ({label, type, value, ...rest}) => {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: '14px' }}>{label}</Form.Label>
                <Form.Control type={type} value={value} {...rest} />
            </Form.Group>
        </>
    )
}

const Select = ({label , name , selectedValue , data , ...rest}) => {
    return (
        <>  
            <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: '14px' }}>{label}</Form.Label>
                <Form.Select name={name} {...rest}>
                    <option >{selectedValue}</option>
                    {
                        data.map(el => {
                            return (
                                <option key={el.id} value={el.id}>{el.name}</option>
                            )
                        })
                    }
                </Form.Select>
            </Form.Group>
        </>
    )
}

export default EditProfil
