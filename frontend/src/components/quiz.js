import React from 'react'
import { Row, Col } from 'react-grid-system';
import ButtonMain from './buttonMain.js';
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";


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
  // justify-content: center;
  align-items: center;

  width: 1126px;
  height: 99px;
  &:hover {
    background-color: #001B48 ;
    color: #6BB4DD;
  }

  
  .text {
    text-align: left;
    margin-left: 0.5em;
  }

  .icon {
    justify-content: right;
  }

`;


export const Quiz = () => {
  return (
    <div id='1' className='quizBody1' style={{}}>
        <h2 style={{display:'flex', justifyContent:'center', alignItems:"center"}}>Select Your Sea of Interest</h2>
        <StyledButton>
            <div class="text">How pollution affects marine life</div>
            <div class="icon"><IoIosArrowForward /></div>
        </StyledButton>
        <StyledButton>
        <div class="text">The Great Pacific Garbage Patch</div>
            <div class="icon"><IoIosArrowForward /></div>
        </StyledButton>
    </div>

  );

}

export default Quiz