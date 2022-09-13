import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.jsx'
import { LandingSlogan, Btn, LandingContainer, LandingTextDiv, ContactButtons, GlobalContainer, LandingPreSlogan, Icon } from '../Styles/LandingPage.style.js'

export default function LandingPage(){
        return (
            <GlobalContainer>
                <NavBar/>
                <LandingContainer>
                    <ContactButtons>
                        <Link to={{pathname: 'https://www.linkedin.com/in/alejo-ufano-837a68244/'}} target='_blank'>
                            <Icon.Linked size={30}/>
                        </Link>
                        <Link to={{pathname: 'https://github.com/AlejoUfano'}} target='_blank'>
                            <Icon.Git size={30}/>
                        </Link>
                    </ContactButtons>

                    <LandingTextDiv>
                        <LandingPreSlogan>HI, I'M&nbsp;<span>BOSTON</span></LandingPreSlogan>
                        <LandingSlogan>
                            WANNA BE<br/>FRIENDS?
                        </LandingSlogan>
                        <Link to='/home'>
                            <Btn>JOIN</Btn>
                        </Link>
                    </LandingTextDiv>

                </LandingContainer>
            </GlobalContainer>
        )
    }
