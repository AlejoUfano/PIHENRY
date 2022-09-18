import styled from "styled-components";

export let FullDetailsContainer = styled.div`
display: flex;
align-self: center;
margin-top: 8vh;
width: 80vw;
height: 70vh;
flex-direction: column;
background-color: #26272b;
border-radius: 12px;
box-shadow: 2px 6px 30px rgb(0 0 0 / 70%);
`
export let CardContainer = styled.div`
align-self: center;
font-family: 'Ubuntu', sans-serif;
border-radius: 12px;
background-color: #26272b;
font-size: 40px;
color: #f7cb36;
font-weight: 500;
text-align: center;
box-shadow: 2px 6px 30px rgb(0 0 0 / 70%);
text-shadow: 0 4px 8px rgb(239 194 46 / 10%);
transition: all 0.4s 0s ease;
display: flex;
width: 80%;
height: max-content;
margin-top: 3vh;
&:hover{
    box-shadow: 3px 8px 45px rgb(0 0 0 / 90%);
    text-shadow: 0 8px 13px rgb(239 194 46 / 30%);
    color: #f7d436;
}
`
export let DetailsTitle = styled.div`
display: flex;
font-family: 'Ubuntu', sans-serif;
border-radius: 12px;
font-size: 40px;
color: #f7cb36;
font-weight: 500;
text-align: center;
text-shadow: 0 4px 8px rgb(239 194 46 / 10%);
transition: all 0.4s 0s ease;
display: flex;
justify-content: center;
text-align: center;
margin-top: 3vh;
background-color: #26272b;
&:hover{
    text-shadow: 0 8px 13px rgb(239 194 46 / 30%);
    color: #f7d436;
}
`

export let ImageContainer = styled.div`
display: flex;
flex-direction: column;
border: none;
width: 30vw;
height: 50vh;
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
width: 30vw;
border-radius: 12px 0px 0px 12px ;
`
export let DetailsContainer = styled.div`
justify-content: center;
flex-direction: column;
font-family: 'Ubuntu', sans-serif;
display: flex;
border-radius: 0px 12px 12px 0px ;
background-color: #2e2f32;
color: #fafbff;
transition: all 0.4s 0s ease;
box-shadow: 0 3px 7px rgb(0 0 0 / 20%);
text-shadow: none;
width: 100%;
&:hover{
    box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
}
`
export let DogTitle = styled.div`
color: #efc32e;
font-size: 33px;
display: flex;
align-self: center;
margin-bottom: 2vh;
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
font-size: 20px;
margin-left: 3vw;
color: #eff0f4;
text-shadow: 0 5px 7px rgb(239 240 244 / 10%)
`
export let TemperamentsDiv = styled.div`
margin-top: 2vh;
font-size: 20px;
display: flex;
align-self: center;
text-shadow: 0 5px 7px rgb(239 240 244 / 10%)
`
export let TempContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
justify-content: center;
width: 90%;
height: 25%;
margin-top: 2vh;
align-self: center;
`
export let Temp = styled.div`
display: flex;
font-size: 2vh;
font-weight: 500;
border: none;
padding: .5vh 1vh;
margin: 1vh 1vh;
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