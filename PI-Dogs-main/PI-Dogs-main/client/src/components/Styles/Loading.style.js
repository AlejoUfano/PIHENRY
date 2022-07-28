import styled from "styled-components";

export let LoadingContainer = styled.div`
background-color: #efeef1;
display: flex;
position: absolute;
width: 100%;
height: 100%;
z-index: 1;
`

export let LoadingIcon = styled.img`
display: flex;
left: 710px;
top: 150px;
position: absolute;
width: 500px;
height: auto;
z-index: 2;
`
export let LoadingBar = styled.img`
display: flex;
left: 810px;
top: 450px;
position: absolute;
width: 300px;
height: auto;
z-index: 3;
`