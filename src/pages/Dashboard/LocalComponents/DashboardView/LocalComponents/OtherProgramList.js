import React from 'react';
import { Breadcrumb, Card, Button} from 'react-bootstrap';
import OtherProgram from './OtherProgram';
import style from "../../../Dashboard.module.css";
import { OtherProgramTryOutCard, OtherProgramWebinarCard } from "./OtherProgramCard/index";
import {
    Link, 
    useRouteMatch
} from "react-router-dom";
import posterWebinar from "../../../../../assets/PosterWebinar.png"
import PosterTryout from "../../../../../assets/PosterTryout.png"

const OtherProgramList = () => {

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
                            PROGRAM BRILLIANTZ LAINNYA
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <OtherProgramCard />
                </div>
            </div>
        </div>
    )
}

const OtherProgramCard = () => {
    let {path , url} = useRouteMatch();

    const programsData = [
        { id: 1, nama_tryout: "TO 1", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: 2, nama_tryout: "TO 2", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: 3, nama_webinar: "Webinar 2", tanggal: "Kamis, 24 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar},
    ]

    return (
        <>
            <Card className="border-0 px-0">
                <Card.Header className="p-3 border-0" style={{backgroundColor: 'white'}}>
                    <div className="row">
                        <div className="col">
                            <h5><strong>Program Brilliantz Lainnya</strong></h5>
                        </div>
                    </div>
                </Card.Header>
                <hr className="mt-0"/>
                <Card.Body>
                    <div className="row"> 
                        <div className="col-lg-4">
                            <OtherProgramTryOutCard tryOutDetail={ programsData[0] } ></OtherProgramTryOutCard>
                        </div>
                        <div className="col-lg-4">
                            <OtherProgramTryOutCard tryOutDetail={ programsData[1] } ></OtherProgramTryOutCard>
                        </div>
                        <div className="col-lg-4">
                            <OtherProgramWebinarCard webinarDetail={ programsData[2] }></OtherProgramWebinarCard>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default OtherProgramList