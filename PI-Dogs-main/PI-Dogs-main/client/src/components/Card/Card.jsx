import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/defaultimg.png' 
import {CardContainer, CardImage, TempContainer, TemperamentDiv, DogName, Weight} from '../Styles/Cards.style.js'

export function Card({dog}) {
  return (
    <Link to={`/dogs/${dog.id}`}>
    <CardContainer>
      <CardImage src={dog.image?dog.image:error} width="240"  alt='error'/>     
      <DogName>{dog.name?.split(' ').slice(0,3).join(' ')}</DogName>      
      <Weight>Weight (kg): {dog.weight}</Weight>
     <TempContainer>
      {dog.temperament?.split(',').slice(0,3).map(e=>{if(e.length)return <TemperamentDiv>{e}</TemperamentDiv>})}      
      <TemperamentDiv style={{color:'#2596ed',fontWeight:'bolder', textShadow:'1px 2px 4px rgb(37 150 237 / 40%)'}}>More...</TemperamentDiv>     
     </TempContainer>       
    </CardContainer>
    </Link>
  )
}                                 
