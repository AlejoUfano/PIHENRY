import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { connect } from "react-redux";
import { getDogDetails } from '../../redux/actions/actions.js'
import Loading from '../Loading/Loading.jsx';
import NavBar from '../NavBar/NavBar.jsx'
import { FullDetailsContainer, ImageContainer, DetailsContainer, Image, DogTitle, NormalDetail, TemperamentsDiv, TempContainer, Temp, CardContainer } from '../Styles/Details.style.js'

let Details = ({getDogDetails, details}) => {

    let {id} = useParams()  
  
    useEffect(() => {
     getDogDetails(id)
    }, [])
    useEffect(() => () => {
        console.log('Unmounted')
      },[])
 console.log('DOG DETAILS:', details);
    if(!details.length) return (<Loading/>)
    if(!details[0].lifeSpan) return (    
      <>
        <NavBar/>
        <FullDetailsContainer>
        <CardContainer>
          DOG DETAILS
        <ImageContainer>
          <Image src={details[0].image} alt='img'/>
          </ImageContainer>
          <DetailsContainer>
          <DogTitle>{details[0].name}</DogTitle>
          <NormalDetail>Age: {details[0].age}</NormalDetail>
          <NormalDetail>Weight: {details[0].weight}</NormalDetail>
          <NormalDetail>Height: {details[0].height}</NormalDetail>   
          <TemperamentsDiv>Temperaments</TemperamentsDiv>     
          <TempContainer>{details[0].temperament?.split(',').slice(0,6).map(e=><Temp>{e}</Temp>)}</TempContainer>  
          </DetailsContainer>  
        </CardContainer>    
        </FullDetailsContainer>        
      </>
    )

  return (    
    <>
    <NavBar/>
      <FullDetailsContainer>   
        <CardContainer>
          DOG DETAILS
        <ImageContainer>
          <Image src={details[0].image} alt='img'/>
        </ImageContainer>
        <DetailsContainer>
          <DogTitle>    {details[0].name}</DogTitle>        
          {details[0].origin?<NormalDetail>Origin: {details[0].origin}</NormalDetail>:null}  
          <NormalDetail>Bred For: {details[0].bred_for}</NormalDetail>
          <NormalDetail>Breed Group: {details[0].breed_group}</NormalDetail>
          <NormalDetail>Life Span: {details[0].lifeSpan}</NormalDetail>   
          <NormalDetail>Weight: {details[0].weight}</NormalDetail>
          <NormalDetail>Height: {details[0].height}</NormalDetail>                 
          <TemperamentsDiv>Temperaments</TemperamentsDiv>
          <TempContainer>{details[0].temperament?.split(',').slice(0,6).map(e=><Temp>{e}</Temp>)}</TempContainer>
        </DetailsContainer>
        </CardContainer>   
      </FullDetailsContainer>
    </>
  )  
}

let mapStateToProps = (state) => {
  return {
      details:state.details
  };
}
  
export default connect(mapStateToProps,{getDogDetails})(Details);