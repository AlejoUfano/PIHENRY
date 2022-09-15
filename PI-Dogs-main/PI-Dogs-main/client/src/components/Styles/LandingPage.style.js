import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export let GlobalContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: url('https://i.imgur.com/1CpfWIA.jpg');
background-repeat: no-repeat;
background-position: right;
background-size: cover; 
transition: all 0.4s 0s ease;
`
export let LandingContainer = styled.div`
display: flex;
align-items: center;
height: 100vh;
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
font-size: 17px;
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
`
export let LandingPreSlogan = styled.div`
display: flex;
font-family: 'Montserrat', sans-serif;
font-size: 30px;
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
`
export let LandingSlogan = styled.div`
font-family: 'Work Sans', sans-serif;
font-weight: 900;
margin: .5vw;
font-size: 93px;
color: #000;
cursor: default;
text-shadow: 5px 10px 15px rgb(0 0 0 / 20%);
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