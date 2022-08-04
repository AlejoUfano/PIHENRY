import styled from "styled-components";
import {KeyboardArrowLeft} from '@styled-icons/material-rounded/KeyboardArrowLeft'
import {KeyboardArrowRight} from '@styled-icons/material-rounded/KeyboardArrowRight'
import {BsSearch} from 'react-icons/bs'
import { IoClose } from "react-icons/io5";

export let GlobalHomeContainer = styled.div`
display: flex;
background-color: #efeef1;

`
export let Icon = styled.div``
Icon.Close = styled(IoClose)`
height: 20px;
width: auto;
display: flex;
position: absolute;
background-color: transparent;
top: 33.9%;
left: 21%;
color: #000;
z-index: 5;
transition: all 0.4s 0s ease;
&:hover{
  transform: scale(1.1);
  background-color: transparent;
  cursor: pointer;
}
`
Icon.Prev = styled(KeyboardArrowLeft)`
width: 100%;
height: 100%;
border-radius: 15px;
color: #4f4f4f;
transition: all 0.4s 0s ease;
&:hover{
    color: #fff;
}
`
Icon.Next = styled(KeyboardArrowRight)`
width: 100%;
height: 100%;
border-radius: 15px;
color: #4f4f4f;
transition: all 0.4s 0s ease;
&:hover{
    color: #fff;
}
`
Icon.Search = styled(BsSearch)`
height: 22px;
width: auto;
color: #4f4f4f;
display: flex;
position: absolute;
top: 225px;
left: 472px;
transition: all 0.4s 0s ease;
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
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
width: 1400px;
height: 810px;
transition: all 0.4s 0s ease;
`
export let Placeholder = styled.div`
font-family: 'Lato', sans-serif;
font-weight: 100;
position: fixed;
top: 340px;
left: 273px;
z-index: 6;
width: 40px;
height: 20px;
padding-left: 10px;
padding-right: 100px;
padding-bottom: 8px;
background-color: #efeef1;
color: #757575;
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
height: 31px;
opacity: 3;
border: 2px solid #4f4f4f;
&::placeholder{
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  bottom: 0px;
    left: 0px;
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
export let CreateText = styled.div`
font-family: 'Ubuntu', sans-serif;
font-size: 25px;
display: flex;
flex-direction: column;
align-self: center;
justify-content: center;
align-self: center;
align-content: center;
text-align: center;
color: #4f4f4f;
margin-top: 7px;
`
export let CreateDog = styled.div`
appearance: none;
color: #4f4f4f;
background-color: transparent;
border: 2px solid #4f4f4f;
border-radius: 15px;
box-sizing: border-box;
cursor: pointer;
display: flex;
justify-content: center;
margin-left: 34%;
margin-top: 15%;
height: 55px;
outline: none;
transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
width: 250px;
font-size: 25px;
padding-top: 4px;
&:hover {
    color: #fff;
    background-color: #4f4f4f;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
}
&:active {
    box-shadow: none;
    transform: translateY(0);
    color: #fff;
}
&:hover ${CreateText}{
  color: #fff;
}
`
