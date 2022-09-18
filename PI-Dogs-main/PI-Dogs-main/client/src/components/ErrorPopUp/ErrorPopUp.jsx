import React from 'react'
import { CreatedContainer, Icon, SuccessMessage, ErrorAlert} from '../Styles/SuccessPopUp.style.js'

export default function ErrorPopUp({ message, setEmptyDb, setExists, setNotFind }) {
  return (    
    <CreatedContainer>
      
      <ErrorAlert onClick={()=>setEmptyDb?setEmptyDb(false):setExists?setExists(false):setNotFind?setNotFind(false):null}>
        <Icon.Error/>
        <SuccessMessage>{message}</SuccessMessage>        
          <Icon.Close/>        
      </ErrorAlert>
     
    </CreatedContainer>
  )
}