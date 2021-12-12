import React from 'react';
import { Breadcrumb, Card, Button, Badge} from 'react-bootstrap';
import style from "../../Dashboard.module.css";
import styleTryOut from "./TryOutDetail.module.css";
import { LeftArrow, Calendar } from '../../../../components'


const TryOutDetail = () => {

    return (
        <div>
            {/* breadcrumb */}
            <div className="row mt-4">
                <div className="col">
                    <Breadcrumb  className={style.breadcrumb}>
                        <Breadcrumb.Item onClick={() => window.location.href = "/dashboard"} >
                            DASHBOARD
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#" >
                            DETAIL PROGRAM
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col d-flex flex-row align-items-center">
                    <h4>
                    <Button variant="light" className="rounded" onClick={() => window.location.href = "/dashboard"}><LeftArrow /></Button> 
                        Detail Program
                    </h4>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-sm-8">
                    <TryOutDetailCard />
                </div>
            </div>
        </div>
    )
}

const TryOutDetailCard = () => {

    return (
        <>
            <Card className="border-0 px-0 mb-5">
                <Card.Header className="p-0 border-0" style={{backgroundColor: 'white'}}>
                    <div className="row">
                        <div className="col p-3 ml-3" style={{borderRight: '2px solid gray'}}>
                            <h5><strong>Try Out 1</strong></h5>
                        </div>
                        <div className="col-sm-3">
                                <small style={{ color:"#867A7A" }} className="text-muted">
                                    Biaya Pendaftaran:
                                </small>
                                <p id={ styleTryOut.program_fee }>
                                    Rp 15.000
                                </p>
                        </div>
                    </div>
                </Card.Header>
                <hr className="mt-0"/>
                <Card.Body className="mx-3">
                    <div className="row mt-2">
                        <div className="col-sm-5" >
                            <Card className="border-0" style={{ backgroundColor:"#F8F8F8" }}>
                                <Card.Body className="p-1 text-center" style={{ fontSize: "14px" }}>
                                    <Calendar fill="#4A47D6"  classProps=""/> Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <h6><strong>Detail TryOut:</strong></h6>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-5" style={{ color:"#4A47D6" }}>
                            <h6><strong>TES POTENSI SKOLASTIK</strong></h6>
                        </div>
                        <div className="col-sm-5" style={{ color:"#4A47D6" }}>
                            <h6><strong>RINCIAN SOAL</strong></h6>
                        </div>
                        <div className="col-sm-2" style={{ color:"#4A47D6" }}>
                            <h6><strong>WAKTU</strong></h6>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                        <Badge pill className="p-2 ml-0" style={{ backgroundColor:"#4A47D6" }}> 1 </Badge> &nbsp;
                        Penalaran Umum
                        </div>
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                            <p>2 bacaan dengan 14 soal dan 6 soal penalaran kuantitatif.</p>
                        </div>
                        <div className="col-sm-2" style={{ color:"#575757" }}>
                            35 Menit
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                        <Badge pill className="p-2 ml-0" style={{ backgroundColor:"#4A47D6" }}> 2 </Badge> &nbsp;
                        Pemahaman Bacaan Menulis
                        </div>
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                            <p>3 bacaan dengan oleh 20 soal.</p>
                        </div>
                        <div className="col-sm-2" style={{ color:"#575757" }}>
                            25 Menit
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                        <Badge pill className="p-2 ml-0" style={{ backgroundColor:"#4A47D6" }}> 3 </Badge> &nbsp;
                        Pengetahuan & Pemahaman Umum
                        </div>
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                            <p>3 bacaan Indonesia dengan 12 soal, dan 2 bacaan Bahasa Inggris dengan 8 soal.</p>
                        </div>
                        <div className="col-sm-2" style={{ color:"#575757" }}>
                            25 Menit
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                        <Badge pill className="p-2 ml-0" style={{ backgroundColor:"#4A47D6" }}> 4 </Badge> &nbsp;
                        Kuantitatif
                        </div>
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                            <p>20 soal pengetahuan kuantitatif.</p>
                        </div>
                        <div className="col-sm-2" style={{ color:"#575757" }}>
                            35 Menit
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-5" style={{ color:"#4A47D6" }}>
                            <h6><strong>TES KEMAMPUAN AKADEMIK</strong></h6>
                        </div>
                        <div className="col-sm-5" style={{ color:"#4A47D6" }}>
                            <h6><strong>RINCIAN SOAL</strong></h6>
                        </div>
                        <div className="col-sm-2" style={{ color:"#4A47D6" }}>
                            <h6><strong>WAKTU</strong></h6>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                        <Badge pill className="p-2 ml-0" style={{ backgroundColor:"#4A47D6" }}> 1 </Badge> &nbsp;
                        Matematika
                        </div>
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                            <p>20 Soal Matematika.</p>
                        </div>
                        <div className="col-sm-2" style={{ color:"#575757" }}>
                            35 Menit
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                        <Badge pill className="p-2 ml-0" style={{ backgroundColor:"#4A47D6" }}> 2 </Badge> &nbsp;
                        Fisika
                        </div>
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                            <p>20 Soal Fisika.</p>
                        </div>
                        <div className="col-sm-2" style={{ color:"#575757" }}>
                            25 Menit
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                        <Badge pill className="p-2 ml-0" style={{ backgroundColor:"#4A47D6" }}> 3 </Badge> &nbsp;
                        Biologi
                        </div>
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                            <p>20 Soal Biologi.</p>
                        </div>
                        <div className="col-sm-2" style={{ color:"#575757" }}>
                            25 Menit
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                        <Badge pill className="p-2 ml-0" style={{ backgroundColor:"#4A47D6" }}> 4 </Badge> &nbsp;
                        Kimia
                        </div>
                        <div className="col-sm-5" style={{ color:"#575757" }}>
                            <p>20 Soal Kimia.</p>
                        </div>
                        <div className="col-sm-2" style={{ color:"#575757" }}>
                            35 Menit
                        </div>
                    </div>

                    <Button className="btn btn-block border-0 p-3 mt-4 mb-3" style={{backgroundColor: '#4A47D6'}} onClick={() => window.location.href = `/payment/tryout/EMXBKe3SnlZc3XSz6Eym`}>Daftar TryOut</Button>    
                </Card.Body>
            </Card>
        </>
    )
}


export default TryOutDetail