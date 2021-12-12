import React from 'react'
import { Button , Card} from 'react-bootstrap'
import { Calendar } from '../../../../../../components'

import style from "./ProgramBoughtCard.module.css"
import {
    Link, 
    useRouteMatch
} from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const ProgramBoughtTryoutCard = ({ tryOutDetail }) => {
    let {path , url} = useRouteMatch();

    return (
        <>
                <Card style={{ borderRadius:'8px' }}>
                    <Card.Img style={{ maxHeight: '195px' }} variant="top" src={ tryOutDetail.poster_tryout } />
                    <Card.Body className="pb-0">
                        <Card.Title as="h6">
                            <strong>{ tryOutDetail.nama_tryout }</strong>
                        </Card.Title>
                        <div id={ style.date_schedule } className="row">
                            <div className="col">
                                <Calendar fill="#4A47D6" classProps="mr-1"/> { tryOutDetail.tanggal }
                            </div>
                        </div>
                        <hr className="mb-2" style={{ height:"0.5px" }}/>
                        <div className="row">
                            <div className="col-sm">
                                <small style={{ color:"#867A7A" }} className="text-muted">
                                    Status:
                                </small>
                                {
                                    tryOutDetail.paid === true ? 
                                    <p>&nbsp;</p>
                                    : 
                                    <p id={ style.tryout }>
                                        Belum dikerjakan
                                    </p> 
                                }
                            </div>
                            <div className="col-sm text-right pt-1">
                                <button id={ style.button_pengerjaan } onClick={() => window.location.href = "/in-exam"} className="btn p-2 px-3" type="button">
                                    Kerjakan
                                </button>
                                <Link to={ `${url}/tryout-detail` } >
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

export default ProgramBoughtTryoutCard