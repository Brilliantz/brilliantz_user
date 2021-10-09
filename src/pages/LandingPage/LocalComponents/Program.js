import React from 'react'
import { Container } from 'react-bootstrap';
import { Feature1, Feature2, Feature3 } from "../../../components";

const Program = ({ size }) => {
    return (
        <div className="bg-light py-5" id="program">
            <Container className="px-3">
                <div className={`${size.width < 600 ? "w-100" : "w-50"}`}>
                    <h1 className="fw-bold">Program yang Membantu Kamu Meraih Kampus Impianmu.</h1>
                    <p className="my-4" style={{ color: '#575757', fontSize: '20px' }}>Kami menyediakan program yang tidak sekedar menyiapkanmu untuk UTBK saja, namun juga untuk memberikan gambaran jurusan yang akan kamu pilih.</p>
                </div>

                <div className={`${size.width < 600 ? "" : "d-flex"}`}>
                    <div className="feature col" style={{ paddingRight: '20px' }}>
                        <div className="feature-icon py-4">
                            <Feature1 />
                        </div>
                        <h2>TryOut Online</h2>
                        <p>Persiapkan dirimu untuk UTBK dengan berbagai macam TryOut Online yang melatih dirimu dalam mengerjakan UTBK secara langsung.</p>
                        <a href="#" className="icon-link" style={{ textDecoration: 'none' }}>
                            Daftar TryOut
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25055 6.15136C7.89305 6.50886 7.89305 7.08636 8.25055 7.44386L11.8072 11.0005L8.25055 14.5572C7.89305 14.9147 7.89305 15.4922 8.25055 15.8497C8.60805 16.2072 9.18555 16.2072 9.54305 15.8497L13.7505 11.6422C14.108 11.2847 14.108 10.7072 13.7505 10.3497L9.54305 6.1422C9.19471 5.79386 8.60805 5.79386 8.25055 6.15136Z" fill="#4A47D6" />
                            </svg>
                        </a>
                    </div>

                    <div style={{ height: '150px', width: '2px', backgroundColor: '#DADCE0', margin: 'auto' , display: `${size.width < 600 ? "none" : ""}` }}></div>

                    <div className="feature col" style={{ paddingRight: '20px', paddingLeft: `${size.width < 600 ? '' : '20px'}` }}>
                        <div className="feature-icon py-4">
                            <Feature2 />
                        </div>
                        <h2>Webinar Pengenalan Jurusan</h2>
                        <p>Kamu masih belum tahu tentang jurusanmu ? Brilliantz menyediakan webinar untuk memperkenalkan jurusan yang kamu inginkan.</p>
                        <a href="#" className="icon-link" style={{ textDecoration: 'none' }}>
                            Daftar Webinar
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25055 6.15136C7.89305 6.50886 7.89305 7.08636 8.25055 7.44386L11.8072 11.0005L8.25055 14.5572C7.89305 14.9147 7.89305 15.4922 8.25055 15.8497C8.60805 16.2072 9.18555 16.2072 9.54305 15.8497L13.7505 11.6422C14.108 11.2847 14.108 10.7072 13.7505 10.3497L9.54305 6.1422C9.19471 5.79386 8.60805 5.79386 8.25055 6.15136Z" fill="#4A47D6" />
                            </svg>
                        </a>
                    </div>

                    <div style={{ height: '150px', width: '2px', backgroundColor: '#DADCE0', margin: 'auto' , display: `${size.width < 600 ? "none" : ""}`  }}></div>

                    <div className="feature col" style={{ paddingRight: '20px', paddingLeft: `${size.width < 600 ? '' : '20px'}` }}>
                        <div className="feature-icon py-4">
                            <Feature3 />
                        </div>
                        <h2>Bimbingan Pra Kuliah</h2>
                        <p>Buat kamu yang sudah diterima di Perguruan Tinggi dan ingin bersiap menghadapi jurusan yang akan kamu tempuh, ini solusinya..</p>
                        <a href="#" className="icon-link" style={{ textDecoration: 'none' }}>
                            Daftar Bimbingan
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.25055 6.15136C7.89305 6.50886 7.89305 7.08636 8.25055 7.44386L11.8072 11.0005L8.25055 14.5572C7.89305 14.9147 7.89305 15.4922 8.25055 15.8497C8.60805 16.2072 9.18555 16.2072 9.54305 15.8497L13.7505 11.6422C14.108 11.2847 14.108 10.7072 13.7505 10.3497L9.54305 6.1422C9.19471 5.79386 8.60805 5.79386 8.25055 6.15136Z" fill="#4A47D6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Program
