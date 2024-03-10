import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"
import Logo from '../assets/logo.js';
import Mascot1 from '../assets/mascot1.js';
import Mascot2 from '../assets/mascot2.js';
import Mascot3 from '../assets/mascot3.js';
import ButtonMain from './buttonMain.js';
import ArticleTile from './articleTile';
import { InputBar } from './InputBar.js';




const Articles = () => {

    return (
        <div className='articles' style={{marginTop:'2rem',display:"flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', }}>
             <h2> Explore the Depths of Knowledge, One Wave at a Time</h2>
            <InputBar></InputBar>
            <div className='articleGrid'>
                <ArticleTile></ArticleTile>
                <ArticleTile></ArticleTile>
                <ArticleTile></ArticleTile>
                <ArticleTile></ArticleTile>
                <ArticleTile></ArticleTile>
                <ArticleTile></ArticleTile>

            </div>
        </div>


    )
}

export default Articles
