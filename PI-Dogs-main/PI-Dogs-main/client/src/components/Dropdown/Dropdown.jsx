import React, {useEffect} from 'react'
import { Details,  } from '../Styles/Dropdown.style'

export default function Dropdown({temperaments, setTemps, temps, handleTemp}) {
  if(temperaments[0]!=='All')temperaments.unshift('All')
  useEffect(()=>{

  },[setTemps])
  return (
      <Details>        
	      <summary class='radios'>          
          {!temps?.length?'Temper':temperaments.map((e,index)=><input type='radio' name='item' id={`item${index+1}`} title={e}/>)}	
	      </summary>
	      <ul class='list'>
          {temperaments.map((e,index)=><li onClick={()=>{
            setTemps(e)    
            handleTemp(e)           
            }} class='li'><label class='label' for={`item${index+1}`}>{e}</label></li>)}
	      </ul>
      </Details>
  )
}


