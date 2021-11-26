import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import style from "../../Dashboard.module.css";

const ProgramsBought = () => {

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
                            PROGRAM YANG DIBELI
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h5>Program yang dibeli</h5>
                </div>
            </div>
        </div>
    )
}

export default ProgramsBought