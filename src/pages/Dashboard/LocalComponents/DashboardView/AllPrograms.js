import React from 'react';
import { Breadcrumb} from 'react-bootstrap';
import {
    Link, 
    useRouteMatch
} from "react-router-dom";


import style from "../../Dashboard.module.css";
import { SpinnerLoader } from '../../../../components';


const AllPrograms = () => {
    let { url } = useRouteMatch();



    return (
        <div>
            {/* breadcrumb */}
            <div className="row mt-4">
                <div className="col">
                    <Breadcrumb  className={style.breadcrumb}>
                        <Breadcrumb.Item href="#" >
                            DASHBOARD
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h5>Program Dibeli</h5>

                    <Link to={`${url}/program-bought`} className="text-decoration-none" >
                        <span style={{color: '#4A47D6'}}> Lihat Semua </span>
                    </Link>
                </div>
            </div>
            <div className="row mt-4 ">
                <div className="col mb-5">
                    <h5>TryOut</h5>
                </div>
            </div>
            <div className="row mt-4 ">
                <div className="col mb-5">
                    <h5>Webinar</h5>
                </div>
            </div>
        </div>
    )
}

export default AllPrograms