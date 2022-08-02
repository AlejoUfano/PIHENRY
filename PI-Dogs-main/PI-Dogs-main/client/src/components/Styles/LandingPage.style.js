import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export let GlobalContainer = styled.div`
display: flex;
position: absolute;
width: 100%;
height: 92%;
top: 80px;
background-color: green;
background: url('https://i.imgur.com/1CpfWIA.jpg');
background-repeat: no-repeat;
background-position: right;
background-size: cover; 
transition: all 0.4s 0s ease;
`
export let Btn = styled.button`
font-family: 'Ubuntu', sans-serif;
display: flex;
color: #dedede;
text-decoration: none;
padding: 8px 53px;
border: none;
border-radius: 30px;
font-size: 17px;
background-color: #ff3366;
background-repeat: no-repeat;
box-shadow: 4px 3px 15px rgba(255,51,102,0.9);
transition: all 400ms cubic-bezier(.23, 1, 0.32, 1);
position: absolute;
top: 58%;
left: 10%;
&:hover{
    cursor: pointer;
    box-shadow: 9px 8px 17px rgba(255,51,102,0.9);
    color: #fff;
    transform: scale(1.05);
}
`
export let LandingPreSlogan = styled.div`
display: flex;
position: absolute;
top: 26%;
left: 10%;
font-family: 'Montserrat', sans-serif;
font-size: 30px;
transition: all 0.4s 0s ease;
text-shadow: 5px 10px 15px rgb(0 0 0 / 20%);
cursor: default;
span{
    text-shadow: 5px 10px 15px rgb(255 51 132 / 20%);
    color: #ff3366;
    &:hover{
        text-shadow: 5px 10px 15px rgb(255 51 132 / 50%);
    }
}
`
export let LandingSlogan = styled.div`
font-family: 'Work Sans', sans-serif;
font-weight: 900;
font-size: 93px;
color: #000;
height: 30%;
margin-left: 10%;
margin-top: 15%;
cursor: default;
text-shadow: 5px 10px 15px rgb(0 0 0 / 20%);
`

export let Icon = styled.div``
Icon.Git = styled(BsGithub)`
left: 2.5%;
top: 45%;
display: flex;
position: absolute;
color: #000;
width: 40px;
transition: all 200ms cubic-bezier(.13, .5, 0.12, .5);
&:hover{
    transform: scale(1.2);
}
`
Icon.Linked = styled(BsLinkedin)`
left: 2.5%;
top: 40%;
display: flex;
position: absolute;
color: #000;
width: 40px;
transition: all 200ms cubic-bezier(.13, .5, 0.12, .5);
&:hover{
    transform: scale(1.2);
}
`