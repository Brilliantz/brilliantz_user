import React from 'react';
import { Breadcrumb, Card, Button} from 'react-bootstrap';
import style from "../../../Dashboard.module.css";
import styleWebinar from "./WebinarDetail.module.css";
import { LeftArrow, Calendar , Schedule } from '../../../../../components'
import posterWebinar from "../../../../../assets/PosterWebinar.png"


const WebinarDetail = () => {

    return (
        <div>
            {/* breadcrumb */}
            <div className="row mt-4">
                <div className="col">
                    <Breadcrumb  className={style.breadcrumb}>
                        <Breadcrumb.Item href="#" >
                            DASHBOARD
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#" >
                            DETAIL PROGRAM
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h4>
                        <strong>
                            <LeftArrow/> Detail Program
                        </strong> 
                    </h4>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-sm-8">
                    <WebinarDetailCard />
                </div>
            </div>
        </div>
    )
}

const WebinarDetailCard = () => {

    const webinarData = [
        { id: 1, nama_webinar: "Webinar 2", tanggal: "Kamis, 24 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar},
    ]

    return (
        <>
            <Card className="border-0 px-0 mb-5">
                <Card.Header className="p-0 border-0" style={{backgroundColor: 'white'}}>
                    <div className="row">
                        <div className="col p-3 ml-3" style={{borderRight: '2px solid gray'}}>
                            <h5><strong>Judul Webinar</strong></h5>
                        </div>
                        <div className="col-sm-3">
                                <small style={{ color:"#867A7A" }} className="text-muted">
                                    Biaya Pendaftaran:
                                </small>
                                <p id={ styleWebinar.program_fee }>
                                    Rp 15.000
                                </p>
                        </div>
                    </div>
                </Card.Header>
                <hr className="mt-0"/>
                <Card.Body>
                    <Card.Img style={{maxHeight: '650px'}} variant="top" src={posterWebinar} />
                    <div className="row mt-4">
                        <div className="col-sm-3" >
                            <Card className="border-0" style={{ backgroundColor:"#F8F8F8" }}>
                                <Card.Body className="p-1 text-center" style={{ fontSize: "14px" }}>
                                    <Calendar fill="#4A47D6"  classProps=""/> { webinarData[0].tanggal }
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-3">
                            <Card className="border-0 " style={{ backgroundColor:"#F8F8F8" }}>
                                <Card.Body className="p-1 text-center" style={{ fontSize: "14px" }}>
                                    <Schedule fill="#4A47D6"  classProps="mr-1"/>  { webinarData[0].waktu_mulai }-{ webinarData[0].waktu_akhir } WIB 
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <p className="mt-4" style={{color: '#4A47D6'}}>Deskripsi Webinar:</p>
                    <p>
                    Siap-siap daftar UTBK tapi masih binggung ambil jurusan apa? Pingin masuk kuliah teknik tapi binggung pilih yang mana? Kalau teknik elektro apa ya kira-kira yang harus dipersiapkan? Tapi teknik industri juga asik nih, gimana ya kira-kira pospek kedepannya? 🤔
                    </p>
                    <p className="mt-4" style={{color: '#4A47D6'}}>Speaker:</p>
                    <p>
                        <ul className="ml-0 ">
                            <li>Speaker 1:</li>
                            <li>Speaker 2:</li>
                        </ul>
                    </p>
                    <p className="mt-4" style={{color: '#4A47D6'}}>Media:</p>
                    <p>
                        Zoom Media Conference
                    </p>

                    <Button className="btn btn-block border-0 p-3 mb-3" style={{backgroundColor: '#4A47D6'}} onClick={() => window.location.href = "/payment/key-tryout"}>Daftar Webinar</Button>    
                </Card.Body>
            </Card>
        </>
    )
}


export default WebinarDetail