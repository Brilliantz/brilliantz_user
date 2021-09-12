import React from 'react';
import { Breadcrumb, Card, Button} from 'react-bootstrap';
import style from "../../../Dashboard.module.css";


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
                            WEBINAR DETAIL
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h4>
                        <strong>Detail Program</strong> 
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
        { id: 1, programType: "webinar", programTitle: "Webinar 1", programDate: "Kamis, 22 Juli 2021", programStartTime: "08:00", programEndTime: "10:00", paid: true},
    ]

    return (
        <>
            <Card className="border-0 px-0">
                <Card.Header className="p-0 border-0" style={{backgroundColor: 'white'}}>
                    <div className="row">
                        <div className="col p-3 ml-3" style={{borderRight: '2px solid gray'}}>
                            <h5><strong>Judul Webinar</strong></h5>
                        </div>
                        <div className="col-sm-3">
                            Biaya Pendaftaran
                            <br />
                            <small>15.000</small>
                        </div>
                    </div>
                </Card.Header>
                <hr className="mt-0"/>
                <Card.Body>
                    <Card.Img style={{maxHeight: '650px'}} variant="top" src="holder.js/100px180" />

                    <p className="mt-4" style={{color: '#4A47D6'}}>Deskripsi Webinar:</p>
                    <p>
                        Deskripsi webinar Deskripsi webinar Deskripsi webinar
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

                    <Button className="btn btn-block border-0" style={{backgroundColor: '#4A47D6'}}>Daftar Webinar</Button>    
                </Card.Body>
            </Card>
        </>
    )
}


export default WebinarDetail