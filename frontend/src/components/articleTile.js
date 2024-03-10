import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./articleTile.css"
import ArticleBg from '../assets/article_bg.js';
import Mascot1 from '../assets/mascot1.js';
import Mascot2 from '../assets/mascot2.js';
import Mascot3 from '../assets/mascot3.js';
import ButtonMain from './buttonMain.js';

const ArticleTile = () => {

    return (
        <div className='buttons'style={{backgroundColor: '#6BB4DD', color:'#001B48', width:'105px', height:'49px', borderRadius:'50px', display:'flex', justifyContent:'center'}}>
      <h3 style={{color:'#001B48', textAlign:'center'}} > Visit </h3>
    </div>

    )
}

export default ArticleTile
