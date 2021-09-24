import React from 'react'
import { Button , Card} from 'react-bootstrap'
import { ProgramBoughtTryOutCard, ProgramBoughtWebinarCard } from "./ProgramBoughtCard/index";
import style from "./ProgramBought.module.css";
import {
    Link, 
    useRouteMatch
} from "react-router-dom";
import posterWebinar from "../../../../../assets/PosterWebinar.png"
import PosterTryout from "../../../../../assets/PosterTryout.png"

const ProgramBought = () => {
    let {path , url} = useRouteMatch();

    const programsData = [
        { id: 1, nama_webinar: "Webinar 1", tanggal: "Kamis, 1 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar, paid: true},
        { id: 2, nama_tryout: "TO 2", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: 3, nama_webinar: "Webinar 2", tanggal: "Kamis, 24 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar, paid: false},
    ]

    return (
        <>
            <Card className="border-0 px-0">
                <Card.Header className="p-3 border-0" style={{backgroundColor: 'white'}}>
                    <div className="row">
                        <div className="col">
                            <h5><strong>Program yang telah dibeli</strong></h5>
                        </div>
                        <div className="col d-flex flex-row-reverse">

                        <Link to={`${url}/program-bought`} className="text-decoration-none" >
                            <span style={{color: '#4A47D6'}}>
                                Lihat Semua
                            </span>
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
        </>
    )
}

export default ProgramBought
