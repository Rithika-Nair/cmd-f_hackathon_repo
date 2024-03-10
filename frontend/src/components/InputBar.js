import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Input = styled.input`
  font-size: 1.2rem;
  padding: .8rem;
  background-color: #D0E8F9;
  margin-top: 1rem;
  border-color: #03204D;
  border-radius: 3rem;
  width: 70rem;
`

const StyledButton = styled.button`
  border: none;
  width: 6rem;
  background-color: #97D9CD;
  font-size: 1rem;
  font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
  padding: .8rem;
  color: #03204D;
  border-radius: 3rem;  
  margin-left: 1rem;
  &:hover {
    background-color: #03204D;
    color: #fff;
  }
`;

const Wrapper = styled.section`
    padding: 0em;
    background-color: transparent
`

export const InputBar = ({handleClick}) => {
    // get amzn url from here
    const [text, setText] = useState("");


    // async function handleClick() {

    //     // <Link
    //     //     to={{
    //     //         pathname: "/summary",
    //     //         state: [{itemName: 'Headphones', itemPrice: 49.99}]
    //     //     }}
    //     // ></Link>
     
    //         // this is where we would send the amzn url to the backend
    // //   await fetch(`http://localhost:3005/api/keyword`)
    // //   .then((res) => res.json())
    // //   .then((data) => console.log(data)) // Sets variable data to fetched JSON data
    // //   .catch((err) => console.log(err));
      
    //   // await fetch(`http://localhost:3005/api/search`)
    //   // .then((res) => res.json())
    //   // .then((data) => console.log(data)) // Sets variable data to fetched JSON data
    //   // .catch((err) => console.log(err));  
        
  
    // }
    
    return(
        <div>
            <Wrapper>
            <Input
        placeholder='Enter an ocean topic'
       // onChange={(e) => {setUrl(e.target.value)}}
            />
        <StyledButton onClick={handleClick}>
            Search
        </StyledButton>
            </Wrapper>
        </div>
    );

}