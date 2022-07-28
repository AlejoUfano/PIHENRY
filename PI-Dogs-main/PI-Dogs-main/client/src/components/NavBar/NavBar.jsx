import React, {useState, useEffect} from 'react'
import logoImg from '../../assets/pawLogoB.png'
import { Link } from 'react-router-dom';
import {NavContainer, LeftContainer, RightContainer, Logo, NavMenu, NavExpandedMenu, NavToHomeContainer, NavLink, OpenLinksButton, NavLinkExtended} from '../Styles/NavBar.styles.js'
import { getDogs } from '../../redux/actions/actions';
import { connect } from 'react-redux';
import {IoMenu, IoClose} from 'react-icons/io5'
import Loading from '../Loading/Loading.jsx';


let NavBar = ({getDogs, setPage, setTemps}) => {
  
  let [extendNav, setExtendNav] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);

useEffect(() => {
  setInterval(() => {
    setIsDisplayed(false);
  }, 1500);
}, []);
  if(isDisplayed) return (<Loading/>)                   
  return (
    <NavContainer extendNavBar={extendNav}>
      <NavMenu>

        <LeftContainer>
          <NavToHomeContainer>
            <Link to='/home'>
              <Logo src={logoImg} onClick={async ()=>{                
                await getDogs()  
                await setIsDisplayed(true)              
                if(setPage) await setPage(0)                
                if(setTemps)await setTemps()
                }} alt="not found"/>
            </Link>
          </NavToHomeContainer>
        </LeftContainer>
        
        <RightContainer>
          <NavLink to='/about'>ABOUT</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
          <OpenLinksButton  onClick={()=>{
            setExtendNav((curr)=>!curr) 
          }}>{extendNav?<IoClose />:<IoMenu/>}</OpenLinksButton>
        </RightContainer>

      </NavMenu>

      {extendNav&&(
        <NavExpandedMenu>
          <NavLinkExtended to='/about'>ABOUT</NavLinkExtended>
          <NavLinkExtended to='/contact'>CONTACT</NavLinkExtended>
        </NavExpandedMenu>
      )}
      
    </NavContainer>
  )
}

export default connect(null,{getDogs})(NavBar);


//react icons color
//style={{ fill: 'black' }}