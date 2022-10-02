import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export let GlobalContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: url('https://i.imgur.com/1CpfWIA.jpg');
background-repeat: no-repeat;
background-position: left;
background-size: cover; 
transition: all 0.4s 0s ease;
@media screen and (max-width: 1000px) {
    background-position: center;
}
`
export let LandingContainer = styled.div`
display: flex;
align-items: center;
height: 100vh;
@media screen and (max-width: 500px) {
   flex-direction: column-reverse;
   justify-content: center;
   align-items: flex-start;
   padding-left: .1rem;
}
`
export let ContactButtons = styled.div`
display: flex;
flex-direction: column;
width: fit-content;
height: 30vh;
justify-content: space-around;
justify-self: center;
margin-left: 3vw;
padding: .2vw;
@media screen and (max-width: 500px) {
    flex-direction: row;
    height: max-content;
    width: 30vw;
    margin-top: 2rem;
    margin-left: 1rem;
}
`
export let LandingTextDiv = styled.div`
display: flex;
flex-direction: column;
margin-left: 5vw;
`
export let Btn = styled.button`
font-family: 'Ubuntu', sans-serif;
display: flex;
color: #dedede;
text-decoration: none;
border: none;
border-radius: 30px;
font-size: 1rem;
margin: .5vw;
padding: 8px 45px;
background-color: #ff3366;
background-repeat: no-repeat;
box-shadow: 4px 3px 15px rgba(255,51,102,0.9);
transition: all 400ms cubic-bezier(.23, 1, 0.32, 1);
&:hover{
    cursor: pointer;
    box-shadow: 9px 8px 17px rgba(255,51,102,0.9);
    color: #fff;
    transform: scale(1.05);
}
@media screen and (max-width: 700px) {
    font-size: .8rem;
}
@media screen and (max-width: 400px) {
    font-size: .7rem;
}
`
export let LandingPreSlogan = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
font-size: 1.8rem;
margin: .5vw;
transition: all 0.4s 0s ease;
text-shadow: 5px 10px 15px rgb(0 0 0 / 20%);
cursor: default;
span{
    text-shadow: 5px 10px 15px rgb(255 51 132 / 20%);
    color: #ff3366;
    transition: all 0.4s 0s ease;
    &:hover{
        text-shadow: 5px 10px 15px rgb(255 51 132 / 50%);
    }
}
@media screen and (max-width: 800px) {
    font-size: 1.4rem;
}
@media screen and (max-width: 600px) {
    font-size: 1.2rem;
}
@media screen and (max-width: 500px) {
    font-size: 1rem;
}
`
export let LandingSlogan = styled.div`
font-family: 'Work Sans', sans-serif;
font-weight: 900;
margin: .5vw;
font-size: 6rem;
color: #000;
cursor: default;
text-shadow: 5px 10px 15px rgb(0 0 0 / 20%);
@media screen and (max-width: 800px) {
    font-size: 5rem;
}
@media screen and (max-width: 600px) {
    font-size: 4rem;
}
@media screen and (max-width: 500px) {
    font-size: 3rem;
}
@media screen and (max-width: 400px) {
    font-size: 2.5rem;
}
`

export let Icon = styled.div``
Icon.Git = styled(BsGithub)`
display: flex;
color: #000;
transition: all 250ms cubic-bezier(.13, .5, 0.12, .5);
&:hover{
    transform: scale(1.2);
}
`
Icon.Linked = styled(BsLinkedin)`
display: flex;
color: #000;
transition: all 250ms cubic-bezier(.13, .5, 0.12, .5);
&:hover{
    transform: scale(1.2);
}
`