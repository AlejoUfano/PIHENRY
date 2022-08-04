import React from 'react'

export default function Dropdown({temperaments, setTemps, temps }) {

console.log('temp state:', temperaments);
  return (
    <>
      <details class='custom-select'>        
	      <summary class='radios'>        
          {temperaments.map((e,index)=><input type='radio' name='item' id={`item${index+1}`} title={e}/>)}	
	      </summary>
	      <ul class='list'>
          {temperaments.map((e,index)=><li onClick={()=>setTemps(e)} class='li'><label class='label' for={`item${index+1}`}>{e}</label></li>)}
	      </ul>
      </details>
    </>
  )
}


