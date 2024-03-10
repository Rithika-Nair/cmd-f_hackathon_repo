
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import "./landing.css"
import Logo from '../assets/logo.js';
import Mascot1 from '../assets/mascot1.js';
import Mascot2 from '../assets/mascot2.js';
import LogoSmall from '../assets/logoSmall.js';

import ReactPlayer from 'react-player'



const Video = () => {

    const videos = [
        {
            url: 'https://www.youtube.com/watch?v=fsjvwQclGLo&ab_channel=Vox'
        },
        {
            url: 'https://www.youtube.com/watch?v=fWe53g76I6A&ab_channel=UNEnvironmentProgramme'
        },
        {
            url: 'https://www.youtube.com/watch?v=HQTUWK7CM-Y&ab_channel=NationalGeographic'
        },
        {
            url: 'https://www.youtube.com/watch?v=tLcnJEMnlTs&ab_channel=CNET'
        },
    ]

    const videoId = [
        {
            url: 'https://img.youtube.com/vi/fsjvwQclGLo/mqdefault.jpg'
        },
        {
            url: 'https://img.youtube.com/vi/fWe53g76I6A/mqdefault.jpg'
        },
        {
            url: 'https://img.youtube.com/vi/HQTUWK7CM-Y/mqdefault.jpg'
        },
        {
            url: 'https://img.youtube.com/vi/tLcnJEMnlTs/mqdefault.jpg'
        },

    ]

    const [slideNumber, setSlideNumber] = useState(0)
    const [vidTitle, setVidTitle] = useState("")



    const set0 = () => {
         setSlideNumber(0) ;
    }
    const set1 = () => {
        setSlideNumber(1) ;
   }
   const set2 = () => {
    setSlideNumber(2) ;
}
const set3 = () => {
    setSlideNumber(3) ;
}



fetch(`https://noembed.com/embed?dataType=json&url=${videos[slideNumber].url}`)
  .then(res => res.json())
  .then(data => {
    setVidTitle(data.title);
   })
  .then(() => {
    console.log(vidTitle);
   });



    return (
        <div id='1' style={{display:"flex", flexDirection: "column", alignItems: 'center', justifyContent: 'center', paddingTop: 20, paddingBottom: 20, marginTop: 110}}>
             <h2> Explore Ocean Wisdom: Dive into Engaging Videos!</h2>
        <div id="1" className='videoCont' style={{}}>

            <div >
                <div >

                    <Container style={{display:'flex'}} >
                        <Col >
                            <Row>
                                <img onClick={set0} className='videoThumb'  src={videoId[0].url}></img>
                            </Row>
                            <Row>

                                <img onClick={set1} className='videoThumb'  src={videoId[1].url}></img>
                            </Row>
                            <Row>

                                <img onClick={set2}  className='videoThumb'  src={videoId[2].url}></img>

                            </Row>
                            <Row>

                                <img onClick={set3} className='videoThumb'  src={videoId[3].url}></img>
                            </Row>
                        </Col>
                        <Col >
                        <ReactPlayer width={"900px"} height={"500px"} className='videoPlay' url={videos[slideNumber].url} />
                        <h3 style={{marginTop:'1rem', marginLeft:'0rem', fontSize:'15px'}}> {vidTitle}</h3>

                    </Col>
                    </Container>
                    

                    {/* <div style={{ justifyContent: 'center', display: 'flex' }}>
                        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.5 15.6699C36.8333 17.5944 36.8333 22.4056 33.5 24.3301L8 39.0526C4.66667 40.9771 0.500002 38.5714 0.500002 34.7224L0.500003 5.27757C0.500003 1.42857 4.66667 -0.97706 8 0.947441L33.5 15.6699Z" fill="#6BB4DD" onClick={prevSlide}  className='prev' />
                        </svg>
                        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 15.6699C-0.833337 17.5944 -0.833333 22.4056 2.5 24.3301L28 39.0526C31.3333 40.9771 35.5 38.5714 35.5 34.7224L35.5 5.27757C35.5 1.42857 31.3333 -0.97706 28 0.947441L2.5 15.6699Z" fill="#6BB4DD" onClick={nextSlide} className='next' />
                        </svg>


                    </div> */}
                </div>

            </div>


        </div>
        </div>
    )
}

export default Video
