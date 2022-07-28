import styled from "styled-components";
import {KeyboardArrowLeft} from '@styled-icons/material-rounded/KeyboardArrowLeft'
import {KeyboardArrowRight} from '@styled-icons/material-rounded/KeyboardArrowRight'
import {BsSearch} from 'react-icons/bs'

export let GlobalHomeContainer = styled.div`
//height:91.8vh;
/* border: 5px solid green; */
display: flex;
background-color: #efeef1;
`
export let Icon = styled.div``
Icon.Prev = styled(KeyboardArrowLeft)`
width: 100%;
height: 100%;
border-radius: 15px;
color: #4f4f4f;
&:hover{
    color: white;
}
`
Icon.Next = styled(KeyboardArrowRight)`
width: 100%;
height: 100%;
border-radius: 15px;
color: #4f4f4f;
&:hover{
    color: white;
}
`
Icon.Search = styled(BsSearch)`
height: 22px;
width: auto;
color: #4f4f4f;
display: flex;
position: absolute;
top: 218px;
left: 465px;
&:hover{
  cursor: pointer;
  color: #000;
}
`

export let HomeCardsContainer = styled.div`
margin-right: 150px;
margin-top: 150px;
margin-bottom: 20px;
margin-left: 5px;
/* border: 1px solid red; */
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
width: 1400px;
height: 810px;
transition: all 0.4s 0s ease;

/* @media (max-width: 1080px) {
    margin-right: 50px;
} */
`
export let SelectContainer = styled.div`
width: 250px;
height: 42px;
background-color: transparent;
font-size: 100%;
box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
margin: 3px 3px;
margin-left: 150px;
&:hover{
  cursor: pointer;
}
&::placeholder{
  font-weight: 900;
}
`
export let OptionsContainer = styled.div`
align-items: center;
flex-direction: column;
display: flex;
width: 450px;
margin-bottom: 20px;
margin-top: 130px;
margin-left: 100px;
`
export let FilterComponent = styled.div`
margin: 0;
padding: 0;
height: 45px;
display: flex;
position: absolute;
left: 80%;
top: 95px;
`

export let SearchBar = styled.input`
display: flex;
font-size: 100%;
margin-left: 146px;
margin-top: 20%;
margin-bottom: 10%;
padding: 10px 20px;
background: transparent;
border-radius: 4px;
box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
width: 206px; 
height: 18px;
opacity: 3;
border: 2px solid #4f4f4f;
&::placeholder{
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  bottom: -1px;
    margin: 0;
    padding: 0;
    left: -10px;
    opacity: 3;
    position: relative;
}
&:hover{
    border: 2px solid #000;

}
`
export let Pagination = styled.div`
display: flex;
height: 64px;
width: 12%;
left: 53.4%;
position: absolute;
top: 90px;

`
export let PaginationButton = styled.button`
  appearance: none;
  background-color: transparent;
  border: 2px solid #4f4f4f;
  border-radius: 15px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  margin: 3px;
  min-height: 60px;
  min-width: 100px;
  outline: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  width: 100%;
&:hover {
  color: #fff;
  background-color: #4f4f4f;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}
&:active {
  box-shadow: none;
  transform: translateY(0);
}
`
export let CreateDog = styled.div`
text-decoration: none;
color: black;
border: 1px solid red;
margin-top: 15%;
font-size: 20px;
`
