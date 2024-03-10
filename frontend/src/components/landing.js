import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"
import Logo from '../assets/logo.js';
import Mascot1 from '../assets/mascot1.js';
import Mascot2 from '../assets/mascot2.js';
import Mascot3 from '../assets/mascot3.js';
import ButtonMain from './buttonMain.js';




const Landing = () => {

    return (
        <div>
            <Container>
                <Col style={{display:"flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 20, marginTop: 40}}>
                    <Logo></Logo>
                    <h1 style={{marginTop: 0}}> OceanAware</h1>
                    <ButtonMain ></ButtonMain>
                </Col>
            </Container>
        </div>


    )
}

export default Landing
