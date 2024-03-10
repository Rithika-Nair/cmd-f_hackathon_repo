
import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"
import Logo from '../assets/logo.js';
import Mascot1 from '../assets/mascot1.js';
import Mascot2 from '../assets/mascot2.js';
import LogoSmall from '../assets/logoSmall.js';




const ButtonSub = () => {

    return (
    <div className='buttonSub' style={{marginTop:'2rem',marginBottom:'4rem',backgroundColor: '#6BB4DD', color:'#001B48', width:'400px', height:'80px', borderRadius:'50px', display:'flex', justifyContent:'center', alignItems:"center", fontSize:'20px'}} >
    <a className='button'href='#2'style={{color:'#001B48', textAlign:'center', fontSize:'30px'}}> Test Your Ocean Know!</a>



</div>



    )
}

export default ButtonSub
