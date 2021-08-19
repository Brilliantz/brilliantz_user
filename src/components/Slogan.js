import React from 'react'
import {Container} from "react-bootstrap";

const Slogan = () => {
    return (
        <section style={{ width: '50%', height: '100%', backgroundColor: '#4A47D6' }}>
            <Container className="w-75 h-100 d-flex justify-content-start align-items-center">
                <div style={{ width: '413px', height: '302px', marginLeft: '50px' }} className="d-flex flex-column justify-content-evenly">
                    <h1 style={{ fontSize: '48px' }} className="text-light">Brilliantz</h1>
                    <h6 style={{ fontSize: '16px' }} className="text-light">Sobat kamu untuk mempersiapkan UTBK</h6>
                    <div>
                        <h1 style={{ fontSize: '48px' }} className="text-dark bg-light p-2 d-inline-block">Webinar Session.</h1>
                        <h1 style={{ fontSize: '48px' }} className="text-dark bg-light p-2 d-inline-block">Try Out Online.</h1>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Slogan
