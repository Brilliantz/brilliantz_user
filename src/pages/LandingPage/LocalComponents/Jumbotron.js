import React from 'react'

const Jumbotron = ({image , size}) => {
    return (
        <>
            <div style={{ height: `${size.width < 1150 ? "" : "650px"}` }} className={`d-flex align-items-center ${size.width < 1150 ? "flex-column-reverse py-3" : ""}`}>
                <div className={`${size.width < 1150 ? "w-100 text-center" : "w-50"}`}>
                    <h1 className="fw-bold my-4">Bersama Kami, Raih Kampus Impianmu</h1>
                    <p className="col-md-10 fs-4 my-4" style={{ color: '#575757', fontSize: '20px' }}>Persiapkan diri meraih kampus impian dengan program-program yang bermanfaat.</p>
                    <button style={{ width: '260px', height: '50px', backgroundColor: '#4A47D6', color: '#fff', borderRadius: '8px', border: 'none' }} className="my-4" type="button">Mulai Persiapanmu Sekarang</button>
                </div>
                <div className="w-100 d-flex justify-content-end align-items-center">
                    <img src={image} alt="imageJumbotron" style={{ width: `${size.width < 1150 ? "100%" : "492px"}`, height: `${size.width < 1150 ? "100%" : "auto"}` }} />
                </div>
            </div>
        </>
    )
}

export default Jumbotron
