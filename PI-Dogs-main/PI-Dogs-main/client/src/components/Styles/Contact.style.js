import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5'

export let Icon = styled.div``
Icon.Mail = styled(IoMailOutline)`
display: flex;
color: #e6e6e6;
height: 30px;
width: auto;
margin-top: 4px;
transition: all 0.3s 0s ease;
position: absolute;
left: 0;
top: 87px;
`
Icon.Location = styled(IoLocationOutline)`
display: flex;
color: #e6e6e6;
height: 30px;
width: auto;
margin-top: 4px;
transition: all 0.3s 0s ease;
position: absolute;
left: 0;
top: 42px;
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
export let ContactContainer = styled.div`
display: flex;
position: absolute;
top: 12%;
left: 10%;
width: 80%;
height: 80%;
background-color: #26272b;
border-radius: 12px;
box-shadow: 0 3px 7px rgb(0 0 0 / 20%);
`
export let EmailContainer = styled.div`
display: flex;
margin-left: 20%;
width: 35%;
height: 60%;
position: absolute;
top: 20%;
`
export let ContactInfoContainer = styled.div`
display: flex;
width: 20%;
height: 60%;
position: absolute;
top: 20%;
left: 55%;
`
export let ContactTitle = styled.div`
font-family: 'Ubuntu', sans-serif;
display: flex;
font-size: 50px;
height: 70px;
align-items: center;
margin-top: 85px;
padding: 3px;
position: absolute;
left: 44%;
color: #efc32e;
text-shadow: 0px 5px 5px rgb(239 194 46 / 20%);
transition: all 0.4s 0s ease;
&:hover{
    text-shadow: 0 5px 9px rgb(239 194 46 / 30%); 
    color: #f7cb36;
    font-size: 52px;
    left: 43.9%;
}

`
export let EmailTitle = styled.div`
font-family: 'Ubuntu', sans-serif;
display: flex;
height: 25px;
width: auto;
color: #efc32e;
text-align: center;
align-items: center;
position: absolute;
left: 30%;
top: -8%;
font-size: 25px;
text-shadow: 0 5px 7px rgb(239 194 46 / 10%);
transition: all 0.4s 0s ease;
&:hover{
    text-shadow: 0 5px 9px rgb(239 194 46 / 30%); 
    color: #f7cb36;
    transform: scale(1.01);
}
`
export let SendButton = styled.button`
appearance: none;
color: #e6e6e6;
background-color: transparent;
border: 2px solid #e6e6e6;
border-radius: 15px;
box-sizing: border-box;
cursor: pointer;
display: inline-block;
margin-left: 15.3%;
position: absolute;
margin-top: 65.5%;
height: 50px;
outline: none;
transition: all 0.4s 0s ease;
width: 71%;
font-size: 25px;
&:hover {
    color: #000;
    background-color: #e6e6e6;
    box-shadow: 2px 10px 17px rgba(0,0,0,0.6);
}
`
export let EmailField = styled.div`
display: flex;
height: 65%;
left: 2.5%;
width: 95%;
position: absolute;
flex-direction: column;
justify-content: center;
top: 10%;
padding: 0;
`
export let Separation = styled.div`
top: 49%;
display: flex;
position: absolute;
width: 90%;
height: 2px;
color: #e6e6e6;
background-color: #e6e6e6;
border-radius: 3px;
left: 5%;
`
export let ContactInfo = styled.div`
display: flex;
position: absolute;
top: 20%;
width: 80%;
left: 10%;
height: 30%;
flex-direction: column;
justify-content: center;
`
export let ContactIcons = styled.div`
display: flex;
position: absolute;
top: 52%;
left: 10%;
width: 80%;
height: 10%;
flex-direction: row;
justify-content: space-around;
`
export let Input = styled.input`
display: block;
margin-left: 15%;
padding: 3px 3px;
background-color: #969696;
width: 70%;
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
width: 71%;
border-radius: 0.4rem;
margin-left: 15%;
height: 40%;
background-color: #969696;
border: 2px solid #828282;
flex-direction: column;
transition: all 0.3s 0s ease;
box-shadow: 0px 5px 10px rgb(150 150 150 / 10%);
&:hover{
    border: 2px solid #fff;
    box-shadow: 2px 10px 17px rgba(0,0,0,0.3);
}
&::placeholder{
    font-size: 16px;
    margin-left: 5px;
    padding-left: 2px;
    color: #515257;
}
`
export let Info = styled.div`
font-family: 'Ubuntu', sans-serif;
display: flex;
color: #e6e6e6;
width: fit-content;
margin-left: 50px;
margin-top: 25px;
 `
export let Error = styled.span`
font-family: 'Ubuntu', sans-serif;
color: #8a3030;
font-weight: 100;
font-size: 18px;
align-self: center;
margin: 0;
padding: 0;
height: 25px;
`
