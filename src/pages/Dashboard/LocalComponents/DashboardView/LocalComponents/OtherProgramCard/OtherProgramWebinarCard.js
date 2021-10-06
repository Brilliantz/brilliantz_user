import React , {useState , useEffect} from 'react'
import { Card } from 'react-bootstrap'
import style from "./OtherProgramCard.module.css";
import { Calendar , Schedule } from '../../../../../../components';

import {
    Link, 
    useRouteMatch
} from "react-router-dom";

const OtherProgramWebinarCard = ({ webinarDetail }) => {

    let { url } = useRouteMatch();

    // const [ webinarDetail, setWebinarDetail ] = useState({
    // });

    let formattedProgramFee = new Intl.NumberFormat(['ban', 'id']).format(webinarDetail.harga);

    // let date = new Date(webinarDetail.tanggal.seconds);
    // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // let dateString = date.toLocaleDateString("en-US", options);

    // let startTime = new Date(webinarDetail.waktu_mulai.seconds);
    // let startTimeHours = startTime.getHours();
    // let startTimeMinutes = startTime.getMinutes();

    // let endTime = new Date(webinarDetail.waktu_akhir.seconds);
    // let endTimeHours = endTime.getHours();
    // let endTimeMinutes = endTime.getMinutes();
    
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
                            <div className="col-sm">
                                <small style={{ color:"#867A7A" }} className="text-muted">
                                    Biaya Pendaftaran:
                                </small>
                                <p id={ style.program_fee }>
                                    { formattedProgramFee }
                                </p>
                            </div>
                            <div className="col-sm text-right pt-1">
                                {/* <Link to="#" > */}
                                    <button id={ style.button_daftar } className="btn p-2 px-3" type="button" onClick={() => window.location.href = "/payment/webinar/key-webinar"}>
                                        Daftar
                                    </button>
                                {/* </Link> */}
                                <Link to={ `${url}/webinar-detail` } >
                                    <button id={ style.button_detail } className="btn p-2 px-3" type="button">
                                        Detail
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
        </>
    )
}

export default OtherProgramWebinarCard
