import React from 'react'
import { Button , Card} from 'react-bootstrap'
import { Calendar } from '../../../../../../components'
import style from "./OtherProgramCard.module.css"
import {
    Link, 
    useRouteMatch
} from "react-router-dom";

const OtherProgramTryoutCard = ({ tryOutDetail }) => {
    let {path , url} = useRouteMatch();

    let formattedProgramFee = new Intl.NumberFormat(['ban', 'id']).format(tryOutDetail.programFee);

    return (
        <>
                <Card style={{ borderRadius:'8px' }}>
                    <Card.Img style={{ maxHeight: '250px' }} variant="top" src="holder.js/100px180" />
                    <Card.Body className="pb-0">
                        <Card.Title as="h6">
                            <strong>{ tryOutDetail.programTitle }</strong>
                        </Card.Title>
                        <div id={ style.date_schedule } className="row">
                            <div className="col">
                                <Calendar fill="#4A47D6" classProps="mr-1"/> { tryOutDetail.programDate }
                            </div>
                        </div>
                        <hr className="mb-2" style={{ height:"0.5px" }}/>
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
                                <Link to={ `${url}/webinar-detail` } >
                                    <button id={ style.button_daftar } className="btn p-2 px-3" type="button">
                                        Daftar
                                    </button>
                                </Link>
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

export default OtherProgramTryoutCard