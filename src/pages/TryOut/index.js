import React , {useState} from 'react'

const TryOut = ({container , size}) => {

    return (
        <div style={{
            position: 'absolute',
            top: '80px',
            left: '0',
            right: '0', 
            bottom: '0',
            overflow: 'auto',
        }}>
            <div className="row">
                <div className="col-sm-9" style={{ backgroundColor: "grey" , height: "750px" }}>
                    <div className="row">
                        <div className="col-sm-3" style={{ backgroundColor: "cyan" , height: "750px" }}>
                            1
                        </div>
                        <div className="col-sm-9" style={{ backgroundColor: "white" , height: "750px" }}>
                            Soal
                        </div>
                    </div>
                </div>
                <div className="col-sm-3" style={{ backgroundColor: "lightgrey" , height: "750px" }}>
                    Navs
                </div>
            </div>
        </div>
    )
}

export default TryOut
