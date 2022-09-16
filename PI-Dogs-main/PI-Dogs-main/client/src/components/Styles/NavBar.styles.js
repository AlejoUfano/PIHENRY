import styled from "styled-components";
import { Link } from 'react-router-dom';

export let NavContainer = styled.nav`
width: 100%;
height: ${(props)=>(props.extendNavBar?'100vh':'80px')};
background-color: #e6e6e6;
display: flex;
flex-direction: column;
box-shadow: 0px 9px 14px -9px rgba(0,0,0,0.83);
-webkit-box-shadow: 0px 9px 14px -9px rgba(0,0,0,0.83);
-moz-box-shadow: 0px 9px 14px -9px rgba(0,0,0,0.83);
z-index: 10;
`
export let LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left: 5%;
`
export let RightContainer = styled.div`
flex: 30%;
display: flex;
justify-content: flex-end;
padding-right: 50px;
`
export let NavToHomeContainer = styled.div`
display: flex;
`
export let NavLink = styled(Link)`
color: #1c1c1c;
font-size: 25px;
font-weight: bold;
text-decoration: none;
align-self: center;
margin: 10px;
-webkit-transition: all 0.2s 0s ease;
-moz-transition: all 0.2s 0s ease;
-o-transition: all 0.2s 0s ease;
transition: all 0.2s 0s ease;

@media (max-width: 700px) {
    display:none ;
}
&:hover{
    color: #000;
    text-shadow: 0 1px 4px rgb(4 4 4 / 40%);
    font-weight: 900;
}
`
export let NavLinkExtended = styled(Link)`
color: #000;
font-size: 25px;
font-weight: bold;
text-decoration: none;
align-self: center;
margin: 10px;
transition: all 0.4s 0s ease;
&:hover{
    text-shadow: 0 1px 4px rgb(4 4 4 / 40%)
}
`
export let NavMenu = styled.div`
width: 100%;
height: 80px;
display: flex;
`
export let NavExpandedMenu = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 700px) {
    display:none ;
}
`
export let OpenLinksButton = styled.button`
width: 70px;
height: 50px;
background: none;
border: none;
color: #000;
font-size: 35px;
align-self: center;
cursor: pointer;

@media (min-width: 700px) {
    display:none ;
}
`
export let Logo = styled.img`
margin: 10px;
max-width:40px;
height: auto;
-webkit-transition: all 0.4s 0s ease;
-moz-transition: all 0.4s 0s ease;
-o-transition: all 0.4s 0s ease;
transition: all 0.4s 0s ease;
&:hover{
    transform: scale(1.1);
    -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(0 1px 4px rgb(4 4 4 / 50%));
}
`