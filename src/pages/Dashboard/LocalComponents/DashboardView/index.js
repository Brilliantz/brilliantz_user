import React from 'react'
import { Breadcrumb , Button , Form} from 'react-bootstrap'
import style from "../../Dashboard.module.css";
import ProgramBought from './ProgramBought';
import OtherProgram from './OtherProgram';



const DashboardView = () => {
    return (
        <div>
            <div className="row mt-4">
                <div className="col">
                    <Breadcrumb className={style.breadcrumb}>
                        <Breadcrumb.Item href="#">
                            DASHBOARD
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="font-weight-bold">Dashboard</h2>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <ProgramBought></ProgramBought>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <OtherProgram></OtherProgram>
                </div>
            </div>
        </div>
    )
}

export default DashboardView
