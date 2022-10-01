import styled from "styled-components";
export let Details = styled.details`
display: flex;
border: 2px solid #4f4f4f;
width: 30vw;
padding: 1vh 0px;   
margin-top: 5vh;
width: 15vw;
height: 4vh;
@media screen and (max-width: 850px) {
    width: 84%;
    margin-right: 7%;
}
@media screen and (max-width: 650px) {
    display: flex;
    margin: 0;
    padding: 0;
    width: 30vw;
    padding: 8px 0px;
    margin-top: 3px;
    margin-left: -50%;
}
`