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
                    <Card.Img style={{ maxHeight: '195px' }} variant="top" src={ webinarDetail.poster_webinar } alt="poster webinar"/>
                    <Card.Body className="pb-0">
                        <Card.Title as="h6">
                            <strong>{ webinarDetail.nama_webinar }</strong>
                        </Card.Title>
                        <div id={ style.date_schedule } className="row">
                            <div className="col-sm-7">
                                <Calendar fill="#4A47D6"  classProps=""/> { webinarDetail.tanggal }
                            </div>
                            <div className="col-sm-5 d-flex flex-row-reverse">
                                {/* { `${startTimeHours}:${startTimeMinutes}` } - { `${endTimeHours}:${endTimeMinutes}` } WIB <Schedule fill="#4A47D6"  classProps="mr-1"/>  */}
                                { webinarDetail.waktu_mulai }-{ webinarDetail.waktu_akhir } WIB <Schedule fill="#4A47D6"  classProps="mr-1"/> 
                            </div>
                        </div>
                        <hr className="mb-0 mt-0" style={{ height:"0.5px" }} />
                        <hr className="mb-2" style={{ height:"0.5px" }} />
                        <div className="row">
                            {
                                webinarDetail.paid === true ? 
                                <div className="col-sm">
                                    <small>&nbsp;</small>
                                    <p>&nbsp;</p>
                                </div>
                                :
                                <div className="col-sm">
                                    <small style={{ color:"#867A7A" }} className="text-muted">
                                        Status:
                                    </small>
                                    <p id={ style.webinar_waiting_payment }>
                                        Menunggu Pembayaran
                                    </p>
                                </div>
                            }

                            <div className="col-sm text-right pt-1">
                            {
                                webinarDetail.paid === true ? 
                                <Link to="" >
                                    <button id={ style.button_konference } className="btn p-2 px-3" type="button">
                                        Masuk Konference
                                    </button>
                                </Link>
                                :
                                <button id={ style.button_konference_disabled } className="btn p-2 px-3" type="button" disabled>
                                    Masuk Konference
                                </button>
                            }
                            </div>
                        </div>
                    </Card.Body>
                </Card>
        </>
    )
}

export default ProgramBoughtWebinarCard
