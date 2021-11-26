import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import style from "../../Dashboard.module.css";

const Webinars = () => {
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
                            WEBINARS
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <h5>Webinard</h5>
                </div>
            </div>
        </div>
    )
}

export default Webinars