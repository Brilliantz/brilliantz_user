import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import style from "../../Dashboard.module.css";

const TryOuts = () => {

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
                            Try Out
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h5>Try Out</h5>
                </div>
            </div>
        </div>
    )
}

export default TryOuts