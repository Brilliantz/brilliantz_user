import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import fire from "../../../config/firebase"

const FormComp = ({ success, handleSuccess, dataUser}) => {
    const [inputs , setInputs] = useState({});
    const [photoProfile , setProfile] = useState("");
    
    const dataDummy = [
        { id: 1, name: "Data 1", value: "data 1", },
        { id: 2, name: "Data 2", value: "data 2", },
        { id: 3, name: "Data 3", value: "data 3", },
    ]

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
            uploadTask = fire.storage().ref().child(`users/photoProfile/${dataUser.displayName === null ? "anonim" : dataUser.displayName}-${imageName}`).put(e.target.files[0])
        }
        uploadTask.then(function(snapshot) {
            snapshot.ref.getDownloadURL().then(response => {
                if (targetName === "screenShot") {
                    setInputs({ ...inputs , screenShot: response})
                } else if (targetName === "photoProfile") {
                    setProfile(response);
                    setInputs({ ...inputs , photoProfile: response})
                    fire.auth().onAuthStateChanged(user => {
                        user.updateProfile({
                            photoURL: response,
                        }).then(() => {
                            fire.auth().onAuthStateChanged(userChanged => {
                                localStorage.setItem("dataUser" , JSON.stringify(userChanged))
                            })
                        })
                    })
                }
            })
        }).catch(error => {
            console.log("error snapshot" , error)
        })  
    }

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
                        src={photoProfile === "" ? 
                            'https://jdihn.jenepontokab.go.id/images/user/no-image.png' 
                            : photoProfile} 
                        alt="profil-preview" 
                        style={{ height: '200px' }} 
                        className="w-100 border rounded" 
                    />
                    <Input text="" type="file" name="photoProfile" onChange={uploadImage} />
                    <p style={{ fontSize: '12px' }}>Gunakan foto dengan format .JPG , .PNG , .JPEG dengan ukuran file maksimal 3 MB</p>
                </div>

                <div style={{ width: '55%' }}>
                    <Input text="Nama Lengkap" type="text" name="nama_lengkap" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Select label="Jenis Kelamin" data={dataDummy} name="jenis_kelamin" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Input text="Asal Sekolah" type="text" name="asal_sekolah" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Select label="Provinsi" data={dataDummy} name="provinsi" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Select label="Kota / Kabupaten" data={dataDummy} name="kabupaten" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Select label="Universitas Impian" data={dataDummy} name="univ_impian" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
                    <Select label="Jurusan Impian" data={dataDummy} name="jurusan_impian" onChange={(e) => setInputs({...inputs, [e.target.name]: e.target.value})} />
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