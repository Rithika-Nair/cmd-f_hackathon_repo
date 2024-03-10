import React from 'react'
import { Row, Col } from 'react-grid-system'
import "./articleTile.css"
import ArticleBg from '../assets/article_bg.svg';
import Mascot1 from '../assets/mascot1.js';
import Mascot2 from '../assets/mascot2.js';
import Mascot3 from '../assets/mascot3.js';
import ButtonMain from './buttonMain.js';
import styled from "styled-components";


const OuterContainer = styled.div`
    text-align: center;
    align-items:left;
    padding: 5rem;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 7rem;
    width: 250px;
    height: 340px;
   
    
   // background-image: url('../assets/article_bg.svg');

   margin: 1.3rem;
    

//background: linear-gradient(180deg, #001B48 0%, #2E6597 100%);
border-radius: 30px;

`
const Container = styled.div`
    padding-left:1rem;
    align-items:left;
    text-align: left;
    width: 300px;
    
`;

const Heading = styled.h3`
  margin-bottom: -2rem;
  max-width: 80rem;
  color:  #E2E8F6;
  
  @media screen and (max-width: 480px){
    font-size 32px;
  }
  `

const Subtitle = styled.h5`
  max-width: 50rem;
  margin-bottom: 1rem;
  color: #97D9CD;
  `

const StyledButton = styled.button`
  border: none;
  background-color:  #6BB4DD;
  font-size: 25px;
  color: #001B48;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 7rem;
  margin-left:4rem;

  width: 4em;
  height: 2em;
  &:hover {
    background-color: #001B48 ;
    color: #6BB4DD;
  }

`;


export const ArticleTile = ({ title, description, link }) => {
  return (
    <OuterContainer className='body1' style={{overflow:"scroll",}}>
      <Container>
        <Heading style={{fontSize:24, paddingBottom:10}}> {title}</Heading>
        <Subtitle style={{fontSize:12, marginBottom:-100}}> {description} </Subtitle>
      </Container >
      <StyledButton onClick={() => window.open({link}, "_blank")}>
        Visit
      </StyledButton>
    </OuterContainer>
  );

}

export default ArticleTile