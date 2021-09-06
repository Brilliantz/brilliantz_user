import React , {useState , useEffect} from 'react'
import {Button , Breadcrumb} from "react-bootstrap";
import { EditIcon , SpinnerLoader } from '../../../../components';
import style from "../../Dashboard.module.css";
import fire from "../../../../config/firebase";
import EditProfil from './EditProfil'

const Profil = ({size , dataUser}) => {    
    const [editProfil , setEditProfil] = useState(false);
    const [data , setData] = useState();
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        fire.firestore().collection("users").doc(dataUser.uid).get()
        .then(doc => {
            if (doc.exists) { 
                setData(doc.data()); 
                setLoading(false);
            }
        })
        .catch(error => { console.log("error" , error) })
    } , [])

    const signOut = () => {
        fire.auth().signOut()
        .then(() => {
            localStorage.removeItem("dataUser");
            window.location.href = "/login";
        })
    }

    return (
        <div>
            {
                editProfil === false ? (
                    loading ? (
                        <div className="w-100 d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
                            <SpinnerLoader text="Loading Data User" />
                        </div>
                    ) : (
                        <div>
                            <Breadcrumb style={{marginTop: '1rem'}} className={style.breadcrumb}>
                                <Breadcrumb.Item href="#">PROFIL</Breadcrumb.Item>
                            </Breadcrumb>

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h1 style={{fontSize: '32px'}}>Profil</h1>
                                <Button variant="outline-danger" className="rounded" style={{width: '156px' , height: '40px'}} onClick={() => signOut()} >Keluar dari Akun</Button>
                            </div>

                            <div style={{width: '100%' , backgroundColor: 'white' , borderRadius: '8px'}}>
                                <div className={`${size.width < 940 ? 'p-3' : 'd-flex p-3'}`}>
                                    <div className={`${size.width < 940 ? 'm-auto foto p-2' : 'foto p-2'}`} style={{height: '100%' , width: '230px' , marginRight: '30px'}}>
                                        <img src={data.photoProfile === null ? 'https://jdihn.jenepontokab.go.id/images/user/no-image.png' : data.photoProfile} alt="profil-preview" style={{height: '200px' , width: '205px', borderRadius: '8px'}}/>
                                        <Button variant="outline-secondary" className="my-3 d-flex justify-content-center" style={{width: '205px'}} onClick={() => setEditProfil(!editProfil)} > <EditIcon /> Edit Profil</Button>{' '}
                                    </div>
                                    <div className="form d-flex h-100" style={{width: '100%'}}>
                                        <ul  className="d-flex flex-column w-50">
                                            <List label="Nama Lengkap" data={data.nama_lengkap} />
                                            <List label="Asal Sekolah" data={data.asal_sekolah} />
                                            <List label="Kabupaten / Kota" data={data.kabupaten} />
                                            <List label="Jurusan Impian" data={data.jurusan_impian} />
                                            <List label="Email" data={data.email} />
                                        </ul>
                                        <ul  className="d-flex flex-column w-50">
                                            <List label="Jenis Kelamin" data={data.jenis_kelamin === "L" ? 'Laki-Laki' : 'Perempuan'} />
                                            <List label="Provinsi" data={data.provinsi} />
                                            <List label="Universitas Impian" data={data.univ_impian} />
                                            <List label="No HP / Whatsapp" data={data.no_hp} />
                                            <List label="" data="" />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                ) : (
                    <EditProfil size={size} handleBack={(value) => setEditProfil(value)} data={data} />
                )
            }
        </div>
    )
}

const List = ({label , data}) => {
    return (
        <>
            <li style={styles.listNone}>
                <span style={styles.label}>{label}</span> <br />
                <span style={styles.data}>{data}</span>
            </li>
        </>
    )
}

const styles = {
    label: { fontSize: '14px' , color: '#867A7A' , marginLeft: '0'},
    data: { fontSize: '20px' , color: '#252D30' , fontWeight: '600' , marginLeft: '0'},
    listNone: { listStyle: 'none' , marginBottom: '15px'},
}


export default Profil