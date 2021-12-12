import React from 'react';
import style from "../../Dashboard.module.css";
import { Breadcrumb, Button, Card } from 'react-bootstrap';
import { LeftArrow } from "../../../../components";
import { OtherProgramWebinarCard } from "./LocalComponents/OtherProgramCard/index";
import posterWebinar from "../../../../assets/PosterWebinar.png"

const Webinars = () => {

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
                        <Breadcrumb.Item onClick={() => window.location.href = "/dashboard"} >
                            DASHBOARD
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href="#" >
                            WEBINARS
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <Card className="border-0 px-0">
                        <Card.Header className="p-3 border-0" style={{backgroundColor: 'white'}}>
                            <div className="row">
                                <div className="col  d-flex flex-row align-items-center">
                                    <Button variant="light" className="rounded" onClick={() => window.location.href = "/dashboard"}><LeftArrow /></Button>
                                    <h5><strong>Try Out</strong></h5>
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

export default Webinars