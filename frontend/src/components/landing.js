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
            <Container  style={{backgroundColor:'white', display:'flex', alignContent: 'center',justifyContent:'center',}}> 
           <Col style={{backgroundColor:'black', alignItems: 'center',justifyContent:'center',}}>
            <Logo></Logo>
            <h1 > OceanAware</h1>
            <ButtonMain></ButtonMain>
            </Col>
            </Container>
          </div>
        
        
    )
}

export default Landing
