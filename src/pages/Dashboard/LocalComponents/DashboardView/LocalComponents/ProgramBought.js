import React from 'react'
import { Button , Card} from 'react-bootstrap'
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
                    <WebinarCard programDetail={programs[0]}></WebinarCard>
                </div>
                <div className="col-lg-4">
                    <TryoutCard programDetail={programs[1]}></TryoutCard>
                </div>
                <div className="col-lg-4">
                    <WebinarCard programDetail={programs[2]}></WebinarCard>
                </div>
            </div>
        </>
    )
}

const WebinarCard = ({ programDetail }) => {
    const paymentStatus = programDetail.paid;
    return (
        <>
                <Card>
                    <Card.Img style={{maxHeight: '250px'}} variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title as="h6">
                            <strong>{programDetail.programTitle}</strong>
                        </Card.Title>
                        <div className="row" style={{fontSize: '14px'}}>
                            <div className="col">
                                {programDetail.programDate}
                            </div>
                            <div className="col d-flex flex-row-reverse">
                                {programDetail.programStartTime} - {programDetail.programEndTime} WIB
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex flex-row-reverse">
                            <Button className="border-0" style={{backgroundColor: '#4A47D6'}}>Masuk Conference</Button>
                        </div>
                    </Card.Body>
                </Card>
        </>
    )
}

const TryoutCard = ({ programDetail }) => {
    return (
        <>
                <Card>
                    <Card.Img style={{maxHeight: '250px'}} variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title as="h6">
                            <strong>{programDetail.programTitle}</strong>
                        </Card.Title>
                        <div className="row" style={{fontSize: '14px'}}>
                            <div className="col">
                                {programDetail.programDate}
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex flex-row-reverse">
                            <button id={style.button_detail} className="btn" type="button">
                                Detail
                            </button>
                            &nbsp;
                            <Button className="border-0" style={{backgroundColor: '#4A47D6'}}>Kerjakan</Button>
                        </div>
                    </Card.Body>
                </Card>
        </>
    )
}

export default ProgramBought
