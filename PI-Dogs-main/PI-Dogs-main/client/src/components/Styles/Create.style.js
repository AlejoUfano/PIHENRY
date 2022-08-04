import styled from "styled-components";
import { IoClose } from 'react-icons/io5'

export let CreateContainer = styled.div`
display: flex;
position: absolute;
top: 15%;
bottom: 10%;
height: 85%;
width: 95%;
transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
justify-content: center;
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
margin: 20px 0px;
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

export let FormInput = styled.input`
display: block;
margin-top: 10px;
margin-bottom: 10px;
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
display: flex;
margin-top: 10px;
position: relative;
margin-bottom: 10px;
margin-left: 5%;
padding: 3px 3px;
background-color: #969696;
width: 32.25%;
left: -2%;
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
margin: 0px;
justify-content: center;
`
export let SelectContainer = styled.div`
width: 70.9%;
display: flex;
margin-left: 15%;
border-radius: 0.4rem;
color: #000;
box-shadow: 0px 5px 10px rgb(150 150 150 / 10%);
`
export let PreviewCardContainer = styled.div`
display: flex;
align-items: center;
align-self: center;
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
margin-left: 15%;
margin-top: 2px;
min-height: 60px;
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
export let FormContainer = styled.form`
border-radius: 12px;
display: flex;
width: 50%;
height: 85%;
margin: 0px 40px;
padding: 0;
flex-direction: column;
background-color: #26272b;
box-shadow: 0px 6px 15px rgb(0 0 0 / 50%);
transition: all 0.4s 0s ease;
&:hover{
    box-shadow: 0px 6px 20px rgb(0 0 0 / 70%);
}
&:hover ${FormTitle} {
    text-shadow: 0 5px 9px rgb(239 194 46 / 30%); 
    color: #f7cb36;
}
`
export let PreviewContainer = styled.div`
display: flex;
width: 20%;
height: 65%;
margin: 80px 0px;
border-radius: 12px;
flex-direction: column;
background-color: #26272b;
box-shadow: 0px 6px 15px rgb(0 0 0 / 50%);
transition: all 0.4s 0s ease;
&:hover{
    box-shadow: 0px 6px 20px rgb(0 0 0 / 70%);
}
&:hover ${PreviewTitle} {
    text-shadow: 0 5px 9px rgb(239 194 46 / 30%); 
    color: #f7cb36;
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
width: fit-content;
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
border: 1px solid red;
&:hover{
    transform: scale(1.1);
}
`
export let TempsContainer = styled.div`
display: flex;
margin-bottom: 5px;
padding: 3px;
height: 35px;
width: 70%;
align-self: center;
justify-content: center;
`
export let Placeholder = styled.div`
display: flex;
position: fixed;
top: 700px;
left: 416px;
width: 150px;
height: 40px;
background-color: #969696;
justify-content: center;
flex-direction: column;
color: #515257;
z-index: 0;
`