import styled from "styled-components";
import {GrStatusGood, GrFormClose} from 'react-icons/gr'

export let Icon = styled.div`
`
Icon.Ok = styled(GrStatusGood)`
height: 40px;
width: auto;
margin-right: 10px;
`
Icon.Close = styled(GrFormClose)`
color: #000;
height: 40px;
width: auto;
display: flex;
position: absolute;
left: 92%;
top: 19px;
`
export let CreatedContainer = styled.div`
display: flex;
position: absolute;
width: 90%;
height: 80%;
top: 15%;
left: 5%;
`
export let SuccessMessage = styled.div`
font-family: 'Ubuntu', sans-serif;
font-size: 25px;
display: flex;
align-self: center;
`
export let Alert = styled.div`
display: flex;
background-color: #4caf50;
padding: 20px 40px;
width: 35%;
position: absolute;
top: 650px;
left: 30%;
border-radius: 6px;
border-left: 20px solid #256b28;
flex-direction: row;
transition: all 0.4s 0s ease;
animation: show_slide 1s ease forwards;
text-shadow: 1px 5px 10px rgb(0 0 0 / 20%);

&:hover{
    cursor: pointer;
    box-shadow: 3px 10px 20px rgb(76 175 80 / 80%);
}
@keyframes show_slide {
    0%{
        transform: translateY(250%);
    }   
    40%{
        transform: translateY(-10%);
    }  
    80%{
        transform: translateY(0%);
    }  
    100%{
        transform: translateY(-10px);
    }  
}

`