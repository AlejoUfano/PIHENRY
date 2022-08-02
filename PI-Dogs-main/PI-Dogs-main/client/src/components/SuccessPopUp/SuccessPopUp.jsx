import React from 'react'
import { Link } from 'react-router-dom';
import { CreatedContainer, Icon, SuccessMessage, Alert} from '../Styles/SuccessPopUp.style.js'

export default function SuccessPopUp({message}) {
  return (    
    <CreatedContainer>
      <Link to='/home'>
      <Alert>
        <Icon.Ok/>
        <SuccessMessage>{message}</SuccessMessage>        
          <Icon.Close/>        
      </Alert>
      </Link>
    </CreatedContainer>
  )
}