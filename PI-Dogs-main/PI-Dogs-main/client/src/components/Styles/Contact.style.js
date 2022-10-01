import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'

export let Icon = styled.div``
Icon.Mail = styled(IoMailOutline)`
display: flex;
color: #e6e6e6;
transition: all 0.3s 0s ease;
`
Icon.Location = styled(IoLocationOutline)`
display: flex;
color: #e6e6e6;
transition: all 0.3s 0s ease;
`
Icon.Git = styled(BsGithub)`
display: flex;
color: #e6e6e6;
height: 40px;
width: auto;
margin-top: 4px;
transition: all 0.3s 0s ease;
&:hover{
    transform: scale(1.1);
    cursor: pointer;
}
`
Icon.Linked = styled(BsLinkedin)`
display: flex;
color: #e6e6e6;
height: 40px;
width: auto;
margin-top: 4px;
transition: all 0.3s 0s ease;
&:hover{
    transform: scale(1.1);
    cursor: pointer;
}
`
export let GlobalContainer = styled.div`
display: flex;
flex-direction: column;
height: auto;
`
export let FormContainer = styled.div`
display: flex;
align-self: center;
margin-top: 2vh;
width: 60vw;
max-width: 900px;
height: 60%;
@media screen and (max-width: 800px) {
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  height: auto;
}
@media screen and (max-width: 550px) {
width: 70vw;
}
`
export let ContactContainer = styled.div`
display: flex;
align-self: center;
margin-top: 10vh;
flex-direction: column;
height: auto;
padding: 3rem;
width: auto;
max-width: 1100px;
background-color: #26272b;
border-radius: 12px;
box-shadow: 0 3px 7px rgb(0 0 0 / 20%);
@media screen and (max-width: 800px) {
margin-top: 5vh;
}
@media screen and (max-width: 500px) {
padding: 1.5rem;
}
`
export let EmailContainer = styled.form`
display: flex;
width: 55%;
justify-content: center;
flex-direction: column;
@media screen and (max-width: 800px) {
  width: 85%;
  margin-top: 1rem;
}
@media screen and (max-width: 550px) {
    width: 100%;
}
`
export let ContactInfoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 45%;
flex-direction: column;
@media screen and (max-width: 800px) {
    width: 80%;
}
`
export let ContactTitle = styled.div`
align-self: center;
height: fit-content;
font-family: 'Ubuntu', sans-serif;
display: flex;
font-size: 50px;
color: #efc32e;
text-shadow: 0px 5px 5px rgb(239 194 46 / 20%);
transition: all 0.4s 0s ease;
&:hover{
    text-shadow: 0 5px 9px rgb(239 194 46 / 30%); 
    color: #f7cb36;
    transform: scale(1.03);
}
`
export let EmailTitle = styled.div`
font-family: 'Ubuntu', sans-serif;
display: flex;
height: 25px;
width: auto;
color: #efc32e;
align-self: center;
margin-top: 3%;
margin-bottom: 3%;
font-size: 23px;
text-shadow: 0 5px 7px rgb(239 194 46 / 10%);
transition: all 0.4s 0s ease;
&:hover{
    text-shadow: 0 5px 9px rgb(239 194 46 / 30%); 
    color: #f7cb36;
}
@media screen and (max-width: 800px) {
 height: auto;
 align-items: center;
 text-align: center;
}
`
export let SendButton = styled.button`
align-self: center;
appearance: none;
color: #e6e6e6;
background-color: transparent;
border: 2px solid #e6e6e6;
border-radius: 6px;
cursor: pointer;
outline: none;
transition: all 0.4s 0s ease;
font-size: 25px;
padding: .2vw;
width: 80%;
&:hover {
    color: #26272b;
    background-color: #e6e6e6;
    box-shadow: 2px 10px 17px rgba(0,0,0,0.6);
}
`
export let EmailField = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-self: center;
width: 80%;
`
export let Separation = styled.div`
display: flex;
height: 2px;
color: #e6e6e6;
width: 45%;
margin-top: .6vw;
background-color: #e6e6e6;
border-radius: 3px;
@media screen and (max-width: 800px) {
width: 70%;
}
@media screen and (max-width: 600px) {
width: 80%;
@media screen and (max-width: 400px) {
width: 90%;
}
}
`
export let ContactInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: fit-content;
`
export let Mail = styled.div`
display: flex;
align-items: center;
margin: .5vw;
`
export let Location = styled.div`
display: flex;
align-items: center;
margin: .5vw;
`

export let ContactIcons = styled.div`
display: flex;
flex-direction: row;
width: 40%;
margin-top: .6vw;
justify-content: space-between;
@media screen and (max-width: 1000px) {
    width: 50%;
}
@media screen and (max-width: 800px) {
    justify-content: space-around;
}
@media screen and (max-width: 400px) {
    width: 65%;
}
`
export let Input = styled.input`
display: block;
background-color: #969696;
font-family: inherit;
font-size: 15px;
font-weight: inherit;
line-height: 30px;
border: 2px solid #828282;
border-radius: 0.4rem;
box-shadow: 0px 5px 10px rgb(150 150 150 / 10%);
transition: all 0.3s 0s ease;
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
export let Message = styled.textarea`
font-family: inherit;
display: flex;
border-radius: 0.4rem;
background-color: #969696;
border: 2px solid #828282;
flex-direction: column;
transition: all 0.3s 0s ease;
box-shadow: 0px 5px 10px rgb(150 150 150 / 10%);
height: 10vh;
&:hover{
    border: 2px solid #fff;
    box-shadow: 2px 10px 17px rgba(0,0,0,0.3);
}
&::placeholder{
    font-size: 16px;
    color: #515257;
}
`
export let Info = styled.div`
font-family: 'Ubuntu', sans-serif;
display: flex;
color: #e6e6e6;
width: fit-content;
margin-left: 1vw;
`
export let Error = styled.span`
font-family: 'Ubuntu', sans-serif;
color: #8a3030;
font-weight: 100;
font-size: 18px;
align-self: center;
height: 25px;
`
