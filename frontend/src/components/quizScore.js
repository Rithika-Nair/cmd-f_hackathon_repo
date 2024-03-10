import React from 'react'
import { Row, Col } from 'react-grid-system';
import ButtonMain from './buttonMain.js';
import styled from "styled-components";
import Score from '../assets/user_final_score.json'

const Heading = styled.h3`
  margin-bottom: 2rem;
  max-width: 100rem;
  color:  #B9DCF0;
  font-size: 80px;
  `
const Subtitle1 = styled.h5`
  // max-width: 50rem;
  margin-bottom: -1rem;
  color: #97D9CD;
  font-size: 25px;
  `

const Subtitle2 = styled.h5`
  // max-width: 50rem;
  margin-bottom: -1rem;
  color: #B9DCF0;
  font-size: 20px;
  `
const Container = styled.div`
  padding-left:1rem;
  align-items: center;
  text-align: center;
  width: 600px;
  margin-bottom: 2rem;
  
`;

const StyledButton = styled.button`
  border: none;
  background-color:  #97CADB;
  font-size: 25px;
  color: #001B48;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 2rem;
  margin-left: 4rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 70px;
  &:hover {
    background-color: #001B48 ;
    color: #6BB4DD;
  }

`;


export const QuizScores = ({button}) => {
  return (
    <div  className='quizScore' style={{display:'flex', justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
        <Container>
            <Heading>Good Job!</Heading>
            <Subtitle1>Your Score: {
                Score.map((score, index) => {
                  return(
                    <div key={index}>
                    {(score.score * 100).toFixed(2)}%
                    </div>
                    ) 
                })
            }</Subtitle1>
            <Subtitle1>You're a Rockstar!</Subtitle1>
            <Subtitle2>Try a different ocean topic and play again or scroll to explore and learn more!</Subtitle2>
        </Container>
        <StyledButton onClick={button}>
            Play Again
        </StyledButton>
    </div>

  );

}

export default QuizScores


