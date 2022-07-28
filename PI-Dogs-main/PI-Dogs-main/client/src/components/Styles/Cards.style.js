import styled from "styled-components";

export let CardContainer = styled.div`
display: flex;
flex-direction: column;
width: 250px;
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
`
export let CardImage = styled.img`
object-fit: cover;
height: 60%;
width: 100%;
border-radius: 12px;
`
export let TemperamentDiv = styled.div`
font-size: 15px;
font-weight: 500;
border: none;
padding: 4px 8px;
margin: 3px 3px;
border-radius: 15px;
/* border: 1px solid red; */
height: 22px;
width: max-content;
background-color: #e6e6e6;
box-shadow: 0 2px 5px rgb(1 1 1 / 30%);
`
export let TempContainer = styled.div`
margin: 6px;
/* border: 1px solid red; */
height: 24%;
width: 90%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`