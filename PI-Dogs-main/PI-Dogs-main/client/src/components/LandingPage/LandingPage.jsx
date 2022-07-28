import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import NavBar from '../NavBar/NavBar.jsx'

// let LandingGlobalContainer = styled.div`
//     height: 100vh;
//     overflow: hidden;
//     background: url('https://i.imgur.com/yEDeExI.jpg')no-repeat center center fixed;
//     -webkit -background-size:cover;
//     -moz -background-size:cover;
//     -o -background-size:cover;
//     background-size:cover;
// `   
let GlobalContainer = styled.div`
    width: 100%;
    height: 100%;
    background: url('https://i.imgur.com/yEDeExI.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 1px solid red;
`
let Btn = styled.button`
    display: inline-block;
    color: white;
    text-decoration: none;
    padding:6px 30px;
    border: 3px solid white;
    border-radius: 30px;
    font-size: 20px;
    background-color: #ff3366;
    background-repeat:no-repeat;
    &:hover{
        animation: pulsate 1s ease-in-out;
        
    }
`
let LandingSlogan = styled.div`
font-weight:900;
color:black;
padding-left:50px;
font-size:100px;
&.span{
    color:red;    
}
`


export default function LandingPage(){
        return (
            <GlobalContainer>
                <NavBar/>
                <LandingSlogan>
                    WANNA BE<br/>FRIENDS?
                </LandingSlogan>
                <Link to='/home'>
                    <Btn>JOIN</Btn>
                </Link>
            </GlobalContainer>
        )
    }

    //<VscTriangleRight size={20} style={{margin:'-2px 0px'}}/>
    // background-image: url("../../assets/landingBackground1.jpg");