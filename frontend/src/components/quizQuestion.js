import React, {useState}from 'react'
import { Row, Col } from 'react-grid-system';
import ButtonMain from './buttonMain.js';
import styled from "styled-components";
import Mascot3 from '../assets/mascot3.js';
import QuizScores from './quizScore.js';
import Questions from '../assets/questions.json'

const Topic = styled.h3`
  margin-bottom: 0rem;
  max-width: 100rem;
  color:  #B9DCF0;
  font-size: 40px;
  `
const Heading = styled.h5`
  margin-bottom: 2rem;
  width: 60rem;
  color:  #001B48;
  padding: 2rem;
  background-color: #97D9CD;
  border-radius: 1rem;
  text-align:left;

  `
const Subtitle1 = styled.h5`
  // max-width: 50rem;
  margin-bottom: -1rem;
  color: #97D9CD;
  font-size: 25px;
  margin-top: 0rem;
  `

const Subtitle2 = styled.h5`
  // max-width: 50rem;
  margin-bottom: -1rem;
  color: #B9DCF0;
  text-align: left;
  font-size: 20px;
  `
const Container = styled.div`
  align-items: center;
  text-align: center;
  width: 600px;
  margin-bottom: 2rem;
  display:flex;
  flex-direction: column;
  margin-top:-3rem;
  
`;
const Container1 = styled.div`
  text-align: left;
  margin-bottom: 4rem;
  width: 60rem;
  flex-direction: column;

  
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

  
`
const Input = styled.input`
  font-size: 1.2rem;
  padding: .8rem;
  width: 60rem;

  background-color: #D0E8F9;
  margin-top: 1rem;
  border-radius: 1rem;
  height: 5rem;
`
;


export const QuizQuestion = ({question, questionNumber}) => {
  const [state, setState] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const QuestionsArr = ["What are the main causes of marine pollution?",
  "What are the short, medium, and long-term impacts of Covid-19 on ocean sustainability?",
  "What are the possible causes for extremely high values for BOD and COD in marine sediment?",
  "Which of the following is the reason for the high density of oil pollution?",
  "What is the most common type of waste that is dumped into the sea?",
  "What is the main reason for the death of aquatic organisms?",
  "How does ship accidents cause marine pollution",
  "What is the Gulf of Mexico oil spill also known as?"]

  function endQuiz() {
    setState(!state)
  }

  function onClick() {
    if (questionNum < 7) {
      setQuestionNum(questionNum + 1);
    } else {
      endQuiz();
    }
  }

  function restart() {
    endQuiz();
    setQuestionNum(0);

  }

if (!state) {
  return (
    
    <div id="2" className='quizQuestion' style={{display:'flex', justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
        <Container1>
          <Topic> How pollution affects marine life</Topic>
        <Subtitle1>Question Number: {questionNum+1}</Subtitle1>
        </Container1>
        <Container>
          
            <Heading>{QuestionsArr[questionNum]}
            </Heading>
            
            <Input
        placeholder='Type your answer here'
       // onChange={(e) => {setUrl(e.target.value)}}
            />
        </Container>
        <StyledButton onClick={onClick}>
            Next Question
        </StyledButton>
    </div> 

  );
} 
else if (state) {
  return (<QuizScores button={restart}></QuizScores>)
}
  

}

export default QuizQuestion