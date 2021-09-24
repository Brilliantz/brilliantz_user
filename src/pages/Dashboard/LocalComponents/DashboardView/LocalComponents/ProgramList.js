import React from 'react';
import { Breadcrumb} from 'react-bootstrap';
import ProgramBought from './ProgramBought';
import OtherProgram from './OtherProgram';
import style from "../../../Dashboard.module.css";


const ProgramList = () => {

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
                    <ProgramBought />
                </div>
            </div>
            <div className="row mt-4 ">
                <div className="col mb-5">
                    <OtherProgram />
                </div>
            </div>
        </div>
    )
}

export default ProgramList