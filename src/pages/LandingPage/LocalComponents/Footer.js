import React from 'react'
import { Logo, InstagramIcon, LinkedInIcon } from '../../../components'
import { Accordion } from 'react-bootstrap'

const Footer = ({ container, size }) => {
    const CustomContainer = container
    return (
        <div>
            {
                size.width < 650 ? (
                    <CustomContainer className="px-3">
                        <footer className="py-5 mt-5">
                            <div className="d-flex flex-column mb-3">
                                <Logo />
                                <p className="text-muted my-3">One Stop Solution Menuju Masa Perkuliahan.</p>
                                <div className="d-flex w-25">
                                    <LinkedInIcon />
                                    <div className="mx-2"></div>
                                    <InstagramIcon />
                                </div>
                            </div>

                            <Accordion>
                                <Accordion.Item eventKey="0" className="border-0 border-bottom">
                                    <Accordion.Header><b>Program Brilliantz</b></Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="nav flex-column">
                                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">TryOut Online</a></li>
                                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Webinar Pengenalan Jurusan</a></li>
                                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Bimbingan Pra Kuliah</a></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className="border-0 border-top">
                                    <Accordion.Header><b>Navigasi</b></Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="nav flex-column">
                                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Beranda</a></li>
                                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tentang Brilliantz</a></li>
                                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Program-Program</a></li>
                                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kolaborasi</a></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </footer>
                    </CustomContainer>
                ) : (
                    <div className="container">
                        <footer className="d-flex py-5 mt-5 justify-content-evenly">
                            <div className="d-flex flex-column justify-content-start">
                                <Logo />
                                <p className="text-muted my-3">One Stop Solution Menuju Masa Perkuliahan.</p>
                                <div className="d-flex w-25">
                                    <LinkedInIcon />
                                    <div className="mx-2"></div>
                                    <InstagramIcon />
                                </div>
                            </div>

                            <div>
                                <h5>Program Brilliantz</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">TryOut Online</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Webinar Pengenalan Jurusan</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Bimbingan Pra Kuliah</a></li>
                                </ul>
                            </div>

                            <div>
                                <h5>Navigasi</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Beranda</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Tentang Brilliantz</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Program-Program</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Kolaborasi</a></li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                )
            }
        </div>
    )
}

export default Footer
