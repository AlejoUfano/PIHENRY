import styled from "styled-components";

export let DogName = styled.div`
font-family: 'Ubuntu', sans-serif;
color: #2e2e2c;
font-size: 18px;
margin-top: 3px;
display: flex;
align-self: center;
text-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
`
export let CardImage = styled.img`
object-fit: cover;
height: 60%;
width: 100%;
border-radius: 12px;
`
export let TemperamentDiv = styled.div`
font-family: 'Ubuntu', sans-serif;
font-size: 15px;
font-weight: 400;
border: none;
padding: 4px 8px;
margin: 3px 3px;
border-radius: 15px;
height: 22px;
width: max-content;
background-color: #e6e6e6;
box-shadow: 0 2px 5px rgb(1 1 1 / 30%);
transition: all 0.4s 0s ease;
`
export let TempContainer = styled.div`
color: #2e2e2c;
margin: 6px;
height: 24%;
width: 90%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
text-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
transition: all 0.4s 0s ease;
`

export let Weight = styled.div`
font-family: 'Ubuntu', sans-serif;
color: #2e2e2c;
margin-top: 3px;
font-size: 15px;
display: flex;
align-self: center;
text-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
`
export let CardContainer = styled.div`
display: flex;
flex-direction: column;
width: 260px;
height: 350px;
margin: 30px 15px;
border: none;
border-radius: 12px;
align-items: center;
text-decoration: none;
background-color: #fff;
box-shadow: 0 3px 7px rgb(0 0 0 / 20%);
transition: all 0.4s 0s ease;
&:hover{
    transform: scale(1.09);
    box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
    filter: saturate(1.5);
    cursor: pointer;
    
}
&:hover ${DogName}{
    text-shadow: 1px 2px 4px rgb(0 0 0 / 40%);
    color: #000;
}
&:hover ${TemperamentDiv}{
    box-shadow: 0 4px 8px rgb(0 0 0 / 40%);
    color: #000;
    background-color: #dbdbdb;
}

`