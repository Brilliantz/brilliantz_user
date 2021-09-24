import React from 'react'
import { Button , Card} from 'react-bootstrap'
import { ProgramBoughtTryOutCard, ProgramBoughtWebinarCard } from "./ProgramBoughtCard/index";
import style from "./ProgramBought.module.css";
import {
    Link, 
    useRouteMatch
} from "react-router-dom";

const ProgramBought = () => {
    let {path , url} = useRouteMatch();

    const programsData = [
        { id: 1, programType: "webinar", programTitle: "Webinar 1", programDate: "Kamis, 22 Juli 2021", programStartTime: "08:00", programEndTime: "10:00", paid: true},
        { id: 2, programType: "tryout", programTitle: "TO 1", programDate: "Kamis, 30 Juli 2021 - Jumat, 1 Feb 2021", programStartTime: "", programEndTime: "", paid: true},
        { id: 3, programType: "webinar", programTitle: "Webinar 2", programDate: "Kamis, 24 Juli 2021", programStartTime: "14:00", programEndTime: "16:00", paid: false},
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

                        <Link to={`${url}/program-bought`} >
                            <span className="text-decoration-none" style={{color: '#4A47D6'}}>
                                Lihat Semua
                            </span>
                        </Link>


                        </div>
                    </div>
                </Card.Header>
                <hr className="mt-0"/>
                <Card.Body>
                    <ProgramCard programs={programsData}></ProgramCard>
                </Card.Body>
            </Card>
        </>
    )
}

const ProgramCard = ({ programs }) => {
    return (
        <>  
            <div className="row"> 
                <div className="col-lg-4">
                    <ProgramBoughtWebinarCard webinarDetail={programs[0]}></ProgramBoughtWebinarCard>
                </div>
                <div className="col-lg-4">
                    <ProgramBoughtTryOutCard tryOutDetail={programs[1]}></ProgramBoughtTryOutCard>
                </div>
                <div className="col-lg-4">
                    <ProgramBoughtWebinarCard webinarDetail={programs[2]}></ProgramBoughtWebinarCard>
                </div>
            </div>
        </>
    )
}

export default ProgramBought
