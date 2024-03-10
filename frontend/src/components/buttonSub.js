
import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"
import Logo from '../assets/logo.js';
import Mascot1 from '../assets/mascot1.js';
import Mascot2 from '../assets/mascot2.js';
import LogoSmall from '../assets/logoSmall.js';




const ButtonSub = () => {

    return (
        <div className='buttonSub'style={{backgroundColor: '#6BB4DD', color:'#001B48', width:'400px', height:'80px', borderRadius:'50px', display:'flex', justifyContent:'center', alignItems:"center"}}>
      <h5 style={{color:'#001B48', textAlign:'center'}} > Test Your Ocean Know! </h5>
    </div>



    )
}

export default ButtonSub
