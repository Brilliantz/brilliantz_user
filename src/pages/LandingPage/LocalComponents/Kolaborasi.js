import React from 'react'
import { Button } from 'react-bootstrap'
import {LinkedInIcon , InstagramIcon} from "../../../components"

const Kolaborasi = ({size}) => {
    return (
        <>
            <div className={`${size.width < 1150 ? "" : "my-5"} px-4 py-4 text-center`} id="kolaborasi">
                <h1 className="mt-0 fw-bold">Mari Berkolaborasi !!</h1>
                <div className="col-lg-4 mx-auto">
                    <p className="lead my-4">Saat ini, Kami membuka kesempatan untuk berkolaborasi dalam penyelenggaraan TryOut Online bersama dengan lembaga, komunitas, maupun organisasi..</p>
                    <Button style={{ backgroundColor: '#4A47D6', borderRadius: '8px', fontSize: '14px' }} className="btn btn-lg p-3 gap-3 mt-3">
                        Hubungi Kami
                        <svg className="mx-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75 3.75V5.25H11.6925L3 13.9425L4.0575 15L12.75 6.3075V11.25H14.25V3.75H6.75Z" fill="white" />
                        </svg>
                    </Button>
                    <div className="mt-4 w-75 mx-auto d-flex align-items-center justify-content-between">
                        <p className="m-0 col-lg-6" style={{textAlign: 'left', fontSize: '13px', color: '#575757'}}>Jangan Lupa Kunjungi Sosial Media Kami.</p>
                        <div className="w-100 mx-auto d-flex align-items-center justify-content-evenly">
                            <LinkedInIcon />
                            <InstagramIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kolaborasi
