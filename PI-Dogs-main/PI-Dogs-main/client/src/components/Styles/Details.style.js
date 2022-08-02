import styled from "styled-components";

export let FullDetailsContainer = styled.div`
display: flex;
position: absolute;
width: 90%;
height: 85%;
top:10%;
left: 5%;
`
export let CardContainer = styled.div`
font-family: 'Ubuntu', sans-serif;
width: 70%;
margin-left: 15%;
border-radius: 12px;
height: 70%;
margin-top: 2.3%;
background-color: #26272b;
font-size: 40px;
color: #f7cb36;
font-weight: 500;
text-align: center;
padding-top: 15px;
box-shadow: 2px 6px 30px rgb(0 0 0 / 70%);
text-shadow: 0 4px 8px rgb(239 194 46 / 10%);
transition: all 0.4s 0s ease;
&:hover{
    box-shadow: 3px 8px 45px rgb(0 0 0 / 90%);
    text-shadow: 0 8px 13px rgb(239 194 46 / 30%);
    color: #f7d436;
}
`
export let ImageContainer = styled.div`
display: flex;
flex-direction: column;
position: absolute;
width: 30%;
height: 50%;
margin-left: 20%;
top: 15%;
border: none;
border-radius: 12px 0px 0px 12px ;
align-items: center;
text-decoration: none;
background-color: #fff;
box-shadow: 0 3px 7px rgb(0 0 0 / 20%);
transition: all 0.4s 0s ease;
&:hover{
    box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
    filter: saturate(1.5);
    cursor: pointer;
}
`
export let Image = styled.img`
object-fit: cover;
height: 100%;
width: 100%;
border-radius: 12px 0px 0px 12px ;
`
export let DetailsContainer = styled.div`
flex-direction: column;
font-family: 'Ubuntu', sans-serif;
display: flex;
position: absolute;
border-radius: 0px 12px 12px 0px ;
top: 15%;
width: 30%;
height: 50%;
margin-left: 19%;
background-color: #2e2f32;
color: #fafbff;
float: right;
left: 30.95%;
transition: all 0.4s 0s ease;
box-shadow: 0 3px 7px rgb(0 0 0 / 20%);
text-shadow: none;
&:hover{
    box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
}
`
export let DogTitle = styled.div`
color: #efc32e;
font-size: 33px;
display: flex;
width: auto;
margin-top: 17px;
align-self: center;
transition: all 0.4s 0s ease;
transform: scale(0.95);
&:hover{
    transform: scale(1);
    text-shadow: 0 5px 9px rgb(239 194 46 / 30%); 
    color: #f7cb36;
}
`
export let NormalDetail = styled.div`
font-family: 'Ubuntu', sans-serif;
display: flex;
margin-left: 35px;
margin-top: 6px;
font-size: 20px;
color: #eff0f4;
text-shadow: 0 5px 7px rgb(239 240 244 / 10%)
`
export let TemperamentsDiv = styled.div`
font-size: 20px;
display: flex;
align-self: center;
text-shadow: 0 5px 7px rgb(239 240 244 / 10%)
`
export let TempContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
height: 35%;
margin-top: 3%;
`
export let Temp = styled.div`
font-size: 20px;
font-weight: 500;
border: none;
padding: 6px 18px;
margin: 5px 15px;
border-radius: 15px;
height: 22px;
width: max-content;
color: #eff0f4;
background-color: #26272b;
box-shadow: 0 2px 5px rgb(1 1 1 / 30%);
transition: all 0.4s 0s ease;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
    color: #fff;
    box-shadow: 1px 5px 10px rgb(1 1 1 / 30%);
    background-color: #17181a;
}
`
//yellow: #efc32e;
//dark grey: #26272b;
//light grey: #47484c;