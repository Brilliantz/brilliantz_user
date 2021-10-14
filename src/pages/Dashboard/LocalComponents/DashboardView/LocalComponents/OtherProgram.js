import React , {useState , useEffect} from 'react'
import { Button , Card} from 'react-bootstrap'
import { OtherProgramTryOutCard, OtherProgramWebinarCard } from "./OtherProgramCard/index";
import style from "./ProgramBought.module.css";
import {
    Link, 
    useRouteMatch
} from "react-router-dom";
import posterWebinar from "../../../../../assets/PosterWebinar.png"
import PosterTryout from "../../../../../assets/PosterTryout.png"


const OtherProgram = () => {
    let {path , url} = useRouteMatch();

    const programsData = [
        // id sementara 
        // 8rM = id tryout yang ada di firebase
        // XT5 = id webinar yang ada di firebase
        { id: "8rMpLO1vfy3IzzulsQcq" , nama_tryout: "TO 1", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: "8rMpLO1vfy3IzzulsQcq" , nama_tryout: "TO 2", tanggal: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", harga: 15000, poster_tryout: PosterTryout},
        { id: "XT5RkGfIDndGTDndmpJ4" , nama_webinar: "Webinar 2", tanggal: "Kamis, 24 Juli 2021", waktu_mulai: "14:00", waktu_akhir: "16:00", harga: 15000, poster_webinar: posterWebinar},
    ]

    return (
        <>
            <Card className="border-0 px-0">
                <Card.Header className="p-3 border-0" style={{backgroundColor: 'white'}}>
                    <div className="row">
                        <div className="col">
                            <h5><strong>Program Brilliantz Lainnya</strong></h5>
                        </div>
                        <div className="col d-flex flex-row-reverse">
                            <Link to={`${url}/other-programs`} className="text-decoration-none" >
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

export default OtherProgram
