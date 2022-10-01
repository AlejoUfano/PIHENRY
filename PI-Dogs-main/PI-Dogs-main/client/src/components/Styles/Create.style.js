import styled from "styled-components";
import { IoClose } from 'react-icons/io5'

export let CreateContainer = styled.div`
display: flex;
padding: 3rem;
transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
justify-content: space-around;
align-items: center;
@media screen and (max-width: 900px) {
padding: 1rem;
}
@media screen and (max-width: 700px) {
flex-direction: column;
}
`
export let FormTitle = styled.div`
display: flex;
font-weight: bold;
font-size: 30px;
margin: 30px;
color: #efc32e;
align-self: center;
transition: all 0.4s 0s ease;
text-shadow: 1px 2px 8px rgb(0 0 0 / 10%);
`
export let PreviewTitle = styled.div`
display: flex;
font-weight: bold;
font-size: 30px;
color: #efc32e;
align-self: center;
text-shadow: 0px 5px 5px rgb(239 194 46 / 20%);
transition: all 0.4s 0s ease;
`
export let ErrorMessage = styled.span`
display: flex;
height: 20px;
color: red;
font-size: 15px;
align-self: center;
align-items: center;
justify-content: center;
font-weight: 500;
`
export let FormInputContainer = styled.div`
display: flex;
width: 60%;
flex-direction: column;
@media screen and (max-width: 700px) {
width: 80%;
}
`

export let FormInput = styled.input`
display: block;
padding: .2vw;
background-color: #969696;
width: 100%;
font-family: inherit;
font-size: 15px;
font-weight: inherit;
line-height: 30px;
border: 2px solid #828282;
border-radius: 0.4rem;
box-shadow: 0px 5px 10px rgb(150 150 150 / 10%);
transition: all 0.4s 0s ease;
&::placeholder {
    color: #515257;
}
&focus {
    outline: none;
    box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
}
&:hover{
    border: 2px solid #fff;
    box-shadow: 2px 10px 17px rgba(0,0,0,0.3);
}
`
export let HeightWeight = styled.input`
padding: .2vw;
display: flex;
margin-top: .1vh;
position: relative;
width: 35%;
margin-bottom: .6vh;
background-color: #969696;
font-family: inherit;
font-size: 15px;
font-weight: inherit;
line-height: 30px;
border: 2px solid #828282;
border-radius: 0.4rem;
transition: all 0.4s 0s ease;
box-shadow: 0px 8px 15px rgba(0,0,0,0.1);
&::placeholder {
    color: #515257;
}
&focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem #5e35b1;
}
&:hover{
    border: 2px solid #fff;
    box-shadow: 2px 10px 17px rgba(0,0,0,0.3);
}
`
export let HeightWeightContainer = styled.div` 
display: flex;
width: 61%;
margin-left: 1%;
align-self: center;
justify-content: space-between;
@media screen and (max-width: 700px) {
width: 81%;
margin-left: 1%;
}
`
export let SelectContainer = styled.div`
display: flex;
border-radius: 0.4rem;
color: #000;
box-shadow: 0px 5px 10px rgb(150 150 150 / 10%);
`
export let PreviewCardContainer = styled.div`
display: flex;
margin-top: 10vh;
align-self: center;
pointer-events: none;
@media screen and (max-width: 700px) {
margin-top: 1vh;
}
`
export let CreateButton = styled.button`
appearance: none;
color: #e6e6e6;
background-color: transparent;
border: 2px solid #e6e6e6;
border-radius: 15px;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
min-height: 60px;
outline: none;
transition: all 0.4s 0s ease;
width: 31vw;
font-size: 25px;
&:hover {
    color: #000;
    background-color: #e6e6e6;
    box-shadow: 2px 10px 17px rgba(0,0,0,0.6);
}
`
export let FormContainer = styled.form`
border-radius: 12px;
display: flex;
width: 50vw;
height: 80vh;
min-height: 550px;
flex-direction: column;
background-color: #26272b;
box-shadow: 0px 6px 15px rgb(0 0 0 / 50%);
transition: all 0.4s 0s ease;
justify-content: center;
align-items: center;
max-width: 960px;
&:hover{
    box-shadow: 0px 6px 20px rgb(0 0 0 / 70%);
}
&:hover ${FormTitle} {
    text-shadow: 0 5px 9px rgb(239 194 46 / 30%); 
    color: #f7cb36;
}
@media screen and (max-width: 900px) {
width: 55vw;
}
@media screen and (max-width: 700px) {
width: 80vw;
}
`
export let SelectDiv = styled.div`
display: flex;
width: 85%;
flex-direction: column;
@media screen and (max-width: 700px) {
width: 113%;
}
`
export let PreviewContainer = styled.div`
display: flex;
width: 30vw;
height: auto;
border-radius: 12px;
flex-direction: column;
justify-content: center;
background-color: #26272b;
box-shadow: 0px 6px 15px rgb(0 0 0 / 50%);
transition: all 0.4s 0s ease;
padding-top: .5rem;
max-width: 570px;
&:hover{
    box-shadow: 0px 6px 20px rgb(0 0 0 / 70%);
}
&:hover ${PreviewTitle} {
    text-shadow: 0 5px 9px rgb(239 194 46 / 30%); 
    color: #f7cb36;
}
@media screen and (max-width: 900px) {
width: 35vw;
}
@media screen and (max-width: 700px) {
width: 80vw;
height: auto;
justify-content: center;
align-items: center;
margin-top: 1rem;
}
`
export let Temp = styled.div`
display: flex;
border: 2px solid #828282;
color: #828282;
margin: 0px 20px;
padding: 3px 3px;
justify-content: center;
box-shadow: 1px 3px 6px rgb(0 0 0 / 40%);
border-radius: 8px;
width: max-content;
height: fit-content;
transition: all 0.4s 0s ease;
&:hover{
    border: 2px solid #e6e6e6;
    color: #e6e6e6;
    cursor: pointer;
    box-shadow: 1px 5px 10px rgb(0 0 0 / 60%);
}
`
export let Icon = styled.div``

Icon.Close = styled(IoClose)`
display: flex;
width: auto;
height: 20px;
color: #000;
transition: all 0.4s 0s ease;
&:hover{
    transform: scale(1.1);
}
`
export let TempsContainer = styled.div`
display: flex;
height: 6vh;
width: 31vw;
align-items: center;
align-self: center;
justify-content: center;
`
export let Placeholder = styled.div`
display: flex;
position: fixed;
background-color: #969696;
justify-content: center;
flex-direction: column;
color: #515257;
z-index: 0;
`