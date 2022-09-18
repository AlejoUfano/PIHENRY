import styled from "styled-components";

export let LoadingContainer = styled.div`
background-color: #efeef1;
display: flex;
justify-content: center;
flex-direction: column;
z-index: 10;
height: 100vh;
width: 100vw;
`

export let LoadingIcon = styled.img`
align-self: center;
display: flex;
width: 500px;
height: auto;
margin-top: 5vh;
`
export let LoadingBar = styled.img`
align-self: center;
display: flex;
width: 300px;
height: auto;
`