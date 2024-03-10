
import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"
import Logo from '../assets/logo.js';
import Mascot1 from '../assets/mascot1.js';
import Mascot2 from '../assets/mascot2.js';
import LogoSmall from '../assets/logoSmall.js';




const ButtonMain = () => {

    return (
        <div className='buttons'style={{backgroundColor: '#6BB4DD', color:'#001B48', width:'400px', height:'90px', borderRadius:'50px', display:'flex', justifyContent:'center'}}>
      <h3 style={{color:'#001B48', textAlign:'center'}} > Dive in </h3>
    </div>



    )
}

export default ButtonMain
