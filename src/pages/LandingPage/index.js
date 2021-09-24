import React from 'react'
import { Container } from 'react-bootstrap';
import imageJumbotron from "../../assets/ImageJumbotron.png"
import { Jumbotron, Program, About, Kolaborasi, Footer } from "./LocalComponents";

const LandingPage = ({ size }) => {
    return (
        <div style={{ marginTop: '80px' }}>
            <Container className="px-3">
                {/* bagian jumbotron */}
                <Jumbotron image={imageJumbotron} size={size} />
            </Container>

            {/* program brilliant area */}
            <Program size={size} />

            {/* about brilliantz area */}
            <Container className="px-3">
                <About size={size} />
            </Container>

            {/* kolaborasi area */}
            <Kolaborasi size={size} />

            {/* footer area */}
            {/* <Footer size={size} /> */}
        </div>
    )
}

export default LandingPage
