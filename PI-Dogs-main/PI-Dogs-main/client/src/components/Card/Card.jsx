import React from 'react';
import { Link } from 'react-router-dom';
import {CardContainer, CardImage, TempContainer, TemperamentDiv} from '../Styles/Cards.style.js'

export function Card({dog}) {
  return (
    <Link to={`/dogs/${dog.id}`}>
    <CardContainer>
      <CardImage src={dog.image} width="240" alt='img'/>     
      <h3>{dog.name?.split(' ').slice(0,3).join(' ')}</h3>      
      <p>Weight (kg): {dog.weight}</p>
     <TempContainer>
      {dog.temperament?.split(',').slice(0,3).map(e=>{
       return <TemperamentDiv>{e}</TemperamentDiv>
      })}      
      <TemperamentDiv style={{color:'#2596ed',fontWeight:'bolder'}}>More...</TemperamentDiv>     
     </TempContainer>       
    </CardContainer>
    </Link>
  )
}                                 
