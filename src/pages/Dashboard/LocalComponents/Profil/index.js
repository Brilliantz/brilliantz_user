import React , {useState} from 'react'
import {Button , Breadcrumb} from "react-bootstrap";
import { EditIcon } from '../../../../components';
import style from "../../Dashboard.module.css";
// import {useHistory} from "react-router-dom";

import EditProfil from './EditProfil'

const Profil = ({size}) => {    
    const [editProfil , setEditProfil] = useState(false);
    // const history = useHistory();
    return (
        <div>
            {
                editProfil === false ? (
                    <div>
                        <Breadcrumb style={{marginTop: '1rem'}} className={style.breadcrumb}>
                            <Breadcrumb.Item href="#">PROFIL</Breadcrumb.Item>
                        </Breadcrumb>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h1 style={{fontSize: '32px'}}>Profil</h1>
                            <a href="/login"><Button variant="outline-danger" className="rounded" style={{width: '156px' , height: '40px'}}>Keluar dari Akun</Button></a>
                        </div>

                        <div style={{width: '100%' , backgroundColor: 'white' , borderRadius: '8px'}}>
                            <div className="d-flex p-3">
                                <div className="foto p-2" style={{height: '100%' , width: '230px' , marginRight: '30px'}}>
                                    <img src="https://jdihn.jenepontokab.go.id/images/user/no-image.png" alt="profil-preview" style={{height: '200px' , width: '205px', borderRadius: '8px'}}/>
                                    <Button variant="outline-secondary" className="my-3 d-flex justify-content-center" style={{width: '205px'}} onClick={() => setEditProfil(!editProfil)} > <EditIcon /> Edit Profil</Button>{' '}
                                </div>
                                <div className="form d-flex h-100" style={{width: '800px'}}>
                                    <ul style={{width: '400px'}} className="d-flex flex-column">
                                        <List label="Nama Lengkap" data="Muhammad Ridlo" />
                                        <List label="Asal Sekolah" data="SMAN 3 Sidoarjo" />
                                        <List label="Kabupaten / Kota" data="Sidoarjo" />
                                        <List label="Jurusan Impian" data="Teknik Informatika" />
                                        <List label="Email" data="ridlo@gmail.com" />
                                    </ul>
                                    <ul style={{width: '400px'}} className="d-flex flex-column">
                                        <List label="Jenis Kelamin" data="Laki - Laki" />
                                        <List label="Provinsi" data="Jawa Timur" />
                                        <List label="Universitas Impian" data="Universitas Toronto" />
                                        <List label="No HP / Whatsapp" data="081234567890" />
                                        <List label="" data="" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <EditProfil editProfil={editProfil} handleBack={(value) => setEditProfil(value)} />
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
    label: { fontSize: '14px' , color: '#867A7A'},
    data: { fontSize: '20px' , color: '#252D30' , fontWeight: '600'},
    listNone: { listStyle: 'none' , marginBottom: '15px'},
}


export default Profil
