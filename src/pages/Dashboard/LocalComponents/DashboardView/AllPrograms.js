import React from 'react';
import { Breadcrumb, Card } from 'react-bootstrap';
import {
    Link, 
    useRouteMatch
} from "react-router-dom";

import style from "../../Dashboard.module.css";
import { ProgramBoughtTryOutCard, ProgramBoughtWebinarCard } from "./LocalComponents/ProgramBoughtCard/index";
import { OtherProgramTryOutCard, OtherProgramWebinarCard } from "./LocalComponents/OtherProgramCard/index";

import posterWebinar from "../../../../assets/PosterWebinar.png"
import PosterTryout from "../../../../assets/PosterTryout.png"

const AllPrograms = () => {
    let { url } = useRouteMatch();

    const programsData = [
        { id: 1, nama_webinar: "Webinar 1", tanggal: "Kamis, 1 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar, paid: true},
        { id: 2, nama_tryout: "TO 2", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: 3, nama_webinar: "Webinar 2", tanggal: "Kamis, 24 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar, paid: false},
    ]

    const tryOutData = [
        { id: 1, nama_tryout: "TO 1", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: 2, nama_tryout: "TO 2", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: 3, nama_tryout: "TO 3", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
    ]

    const webinarsData = [
        { id: 1, nama_webinar: "Webinar 1", tanggal: "Kamis, 1 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar, paid: true},
        { id: 2, nama_webinar: "Webinar 2", tanggal: "Kamis, 24 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar, paid: false},
        { id: 3, nama_webinar: "Webinar 3", tanggal: "Kamis, 24 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar, paid: false},
    ]

    return (
        <div>
            {/* breadcrumb */}
            <div className="row mt-4">
                <div className="col">
                    <Breadcrumb  className={style.breadcrumb}>
                        <Breadcrumb.Item href="#" >
                            DASHBOARD
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col mb-4">
                    <Card className="border-0 px-0">
                        <Card.Header className="p-3 border-0" style={{backgroundColor: 'white'}}>
                            <div className="row">
                                <div className="col  d-flex flex-row justify-content-between">
                                    <h5><strong>Program yang dibeli</strong></h5>

                                    <Link to={`${url}/program-bought`} className="text-decoration-none" >
                                        <span style={{color: '#4A47D6'}}> Lihat Semua </span>
                                    </Link>
                                </div>
                            </div>
                        </Card.Header>
                        <hr className="mt-0"/>
                        <Card.Body>
                            <div className="row"> 
                                <div className="col-lg-4">
                                    <ProgramBoughtWebinarCard webinarDetail={ programsData[0] }></ProgramBoughtWebinarCard>
                                </div>
                                <div className="col-lg-4">
                                    <ProgramBoughtTryOutCard tryOutDetail={ programsData[1] }></ProgramBoughtTryOutCard>
                                </div>
                                <div className="col-lg-4">
                                    <ProgramBoughtWebinarCard webinarDetail={ programsData[2] }></ProgramBoughtWebinarCard>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row mt-4 ">
                <div className="col mb-4">
                    <Card className="border-0 px-0">
                        <Card.Header className="p-3 border-0" style={{backgroundColor: 'white'}}>
                            <div className="row">
                                <div className="col  d-flex flex-row justify-content-between">
                                    <h5><strong>Try Out</strong></h5>

                                    <Link to={`${url}/try-out`} className="text-decoration-none" >
                                        <span style={{color: '#4A47D6'}}> Lihat Semua </span>
                                    </Link>
                                </div>
                            </div>
                        </Card.Header>
                        <hr className="mt-0"/>
                        <Card.Body>
                            <div className="row"> 
                                <div className="col-lg-4">
                                    <OtherProgramTryOutCard tryOutDetail={ tryOutData[0] }></OtherProgramTryOutCard>
                                </div>
                                <div className="col-lg-4">
                                    <OtherProgramTryOutCard tryOutDetail={ tryOutData[1] }></OtherProgramTryOutCard>
                                </div>
                                <div className="col-lg-4">
                                    <OtherProgramTryOutCard tryOutDetail={ tryOutData[2] }></OtherProgramTryOutCard>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row mt-4 ">
                <div className="col mb-5">
                    <Card className="border-0 px-0">
                        <Card.Header className="p-3 border-0" style={{backgroundColor: 'white'}}>
                            <div className="row">
                                <div className="col  d-flex flex-row justify-content-between">
                                    <h5><strong>Webinar</strong></h5>
                                    <Link to={`${url}/webinar`} className="text-decoration-none" >
                                        <span style={{color: '#4A47D6'}}> Lihat Semua </span>
                                    </Link>
                                </div>
                            </div>
                        </Card.Header>
                        <hr className="mt-0"/>
                        <Card.Body>
                            <div className="row"> 
                                <div className="col-lg-4">
                                    <OtherProgramWebinarCard webinarDetail={ webinarsData[0] }></OtherProgramWebinarCard>
                                </div>
                                <div className="col-lg-4">
                                    <OtherProgramWebinarCard webinarDetail={ webinarsData[1] }></OtherProgramWebinarCard>
                                </div>
                                <div className="col-lg-4">
                                    <OtherProgramWebinarCard webinarDetail={ webinarsData[2] }></OtherProgramWebinarCard>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AllPrograms