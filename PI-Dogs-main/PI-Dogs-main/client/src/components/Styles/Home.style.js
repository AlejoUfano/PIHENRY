import styled from "styled-components";
import {KeyboardArrowLeft} from '@styled-icons/material-rounded/KeyboardArrowLeft'
import {KeyboardArrowRight} from '@styled-icons/material-rounded/KeyboardArrowRight'
import {BsSearch} from 'react-icons/bs'
import { IoClose } from "react-icons/io5";

export let GlobalContainer = styled.div`
display: flex;
flex-direction: column;
`

export let GlobalHomeContainer = styled.div`
display: flex;
background-color: #efeef1;
flex-direction: column;
`
export let Header = styled.div`
display: flex;
padding-top: 3vh;
@media screen and (max-width: 1100px) {
  justify-content: center;
  width: 100%;
  flex-direction: row-reverse;
  padding: 1rem;
}
@media screen and (max-width: 650px) {
  width: 100%;
  flex-direction: row-reverse;
  padding: 1rem;
}
`
export let Pagination = styled.div`
display: flex;
align-self: center;
width: 56vw;
justify-content: flex-end;
margin-right: 20vw;
@media screen and (max-width: 1100px) {
  width: 45vw;
  margin-right: 14vw;
}
@media screen and (max-width: 650px) {
width: 40vw;
justify-content: center;
margin-right: 30vw;
margin-left: 10vw;
}
`
export let PaginationButton = styled.button`
display: flex;
appearance: none;
background-color: transparent;
border: 2px solid #4f4f4f;
border-radius: 15px;
cursor: pointer;
margin: 3px;
min-height: 60px;
min-width: 80px;
outline: none;
transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
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
export let FilterComponent = styled.div`
display: flex;
margin-top: .5vh;
`
export let HomeBody = styled.div`
display: flex;
@media screen and (max-width: 650px) {
flex-direction: column;
}
`
export let Test = styled.div`
display: flex;
padding: 2% 4%;
width: 50%;
height: 30px;
`
export let Form = styled.form`
display: flex;
width: 15.2vw;
height: 6vh;
@media screen and (max-width: 850px) {
  width: 85%;
  align-self: center;
}
`
export let OptionsContainer = styled.div`
align-items: flex-end;
flex-direction: column;
display: flex;
width: 25vw;
height: 70vh;
padding-top: 10vh;
@media screen and (max-width: 650px) {
width: 100%;
flex-direction: row;
padding: 0;
height: max-content;
justify-content: center;
align-items: center;
}        
`
export let HomeCardsContainer = styled.div`
display: flex;
width: 75vw;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
transition: all 0.4s 0s ease;
@media screen and (max-width: 650px) {
  width: 100%;
}
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
/* @media screen and (max-width: 800px) {
  margin-left: 0;
} */
`
export let SearchBar = styled.input`
display: flex;
background: transparent;
padding: 0% 4%;
border-radius: 4px;
width: 100%;
height: 6vh;
font-size: 17px;
box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
border: 2px solid #4f4f4f;
margin-left: 0;
&::placeholder{
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  opacity: 3;
}
&:hover{
  border: 2px solid #000;
}
@media screen and (max-width: 650px) {
margin: 0;
padding: 0;
width: 30vw;
}
`
export let CreateText = styled.div`
font-family: 'Ubuntu', sans-serif;
font-size: 25px;
display: flex;
color: #4f4f4f;
`
export let CreateDog = styled.div`
appearance: none;
color: #4f4f4f;
background-color: transparent;
border: 2px solid #4f4f4f;
border-radius: 15px;
cursor: pointer;
display: flex;
justify-content: center;
outline: none;
transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
font-size: 23px;
width: 15vw;
height: 6vh;
margin-top: 5vh;
text-align: center;
align-items: center;
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
@media screen and (max-width: 850px) {
    width: 85%;
    align-self: center;
}
`
