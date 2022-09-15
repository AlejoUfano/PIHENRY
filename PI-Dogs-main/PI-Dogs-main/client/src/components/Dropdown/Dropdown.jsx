import React from 'react'
import { GlobalContainer, Details,  } from '../Styles/Dropdown.style'

export default function Dropdown({temperaments, setTemps, temps }) {
  if(temperaments[0]!=='All')temperaments.unshift('All')
  console.log(temperaments);
  return (
      <Details>        
	      <summary class='radios'>
          
          {!temps?.length?'Temperaments':temperaments.map((e,index)=><input type='radio' name='item' id={`item${index+1}`} title={e}/>)}	
	      </summary>
	      <ul class='list'>
          {temperaments.map((e,index)=><li onClick={()=>setTemps(e)} class='li'><label class='label' for={`item${index+1}`}>{e}</label></li>)}
	      </ul>
      </Details>
  )
}


