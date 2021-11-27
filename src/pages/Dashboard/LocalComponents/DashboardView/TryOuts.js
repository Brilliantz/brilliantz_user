import React from 'react';
import { Breadcrumb, Button, Card } from 'react-bootstrap';
import style from "../../Dashboard.module.css";
import { LeftArrow } from "../../../../components";
import { OtherProgramTryOutCard } from "./LocalComponents/OtherProgramCard/index";
import PosterTryout from "../../../../assets/PosterTryout.png"

const TryOuts = () => {
    const tryOutData = [
        { id: 1, nama_tryout: "TO 1", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: 2, nama_tryout: "TO 2", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: 3, nama_tryout: "TO 3", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
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
                            TRY OUT
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
        </div>
    )
}

export default TryOuts