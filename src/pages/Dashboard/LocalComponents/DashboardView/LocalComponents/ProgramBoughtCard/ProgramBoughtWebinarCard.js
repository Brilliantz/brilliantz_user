import React from 'react'
import { Card } from 'react-bootstrap'
import style from "./ProgramBoughtCard.module.css";
import { Calendar , Schedule } from '../../../../../../components';
import {
    Link, 
    useRouteMatch
} from "react-router-dom";

const ProgramBoughtWebinarCard = ({ webinarDetail }) => {
    let { url } = useRouteMatch();

    return (
        <>
                <Card style={{ borderRadius:'8px' }}>
                    <Card.Img style={{ maxHeight: '250px' }} variant="top" src="holder.js/100px180" />
                    <Card.Body className="pb-0">
                        <Card.Title as="h6">
                            <strong>{ webinarDetail.programTitle }</strong>
                        </Card.Title>
                        <div id={ style.date_schedule } className="row">
                            <div className="col">
                                <Calendar fill="#4A47D6"  classProps="mr-1"/> { webinarDetail.programDate }
                            </div>
                            <div className="col d-flex flex-row-reverse">
                                { webinarDetail.programStartTime } - { webinarDetail.programEndTime } WIB <Schedule fill="#4A47D6"  classProps="mr-1"/> 
                            </div>
                        </div>
                        <hr className="mb-2" style={{ height:"0.5px" }} />
                        <div className="row">
                            <div className="col-sm">
                                <small style={{ color:"#867A7A" }} className="text-muted">
                                    Status:
                                </small>
                                <p id={ style.webinar_waiting }>
                                    Menunggu Pembayaran
                                </p>
                            </div>
                            <div className="col-sm text-right pt-1">
                                <Link to={ `${url}/webinar-detail` } >
                                    <button id={ style.button_konference_disabled } className="btn p-2 px-3" type="button" disabled>
                                        Masuk Konference
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
        </>
    )
}

export default ProgramBoughtWebinarCard
