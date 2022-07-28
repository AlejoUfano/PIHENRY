import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"
import { connect } from "react-redux";
import { getDogDetails } from '../../redux/actions/actions.js'
import Loading from '../Loading/Loading.jsx';
import NavBar from '../NavBar/NavBar.jsx'

let Details = ({getDogDetails, details}) => {

    let {id} = useParams()  
  
    useEffect(() => {
     getDogDetails(id)
    }, [])
    useEffect(() => () => {
        console.log('Unmounted')
      },[])
 
    if(!details.length) return (<Loading/>)
    if(!details[0].lifeSpan) return (    
      <div>
        <NavBar/>
        <div>Name: {details[0].name}</div>
        <img src={details[0].image} width="240" alt='img'/>
        <div>Temperaments: {details[0].temperament}</div>
        <div>Weight: {details[0].weight}</div>
        <div>Height: {details[0].height}</div>
        <div>Age: {details[0].age}</div>
      </div>
    )

  return (    
    <div>
      <NavBar/>
      <div>Name: {details[0].name}</div>
      <img src={details[0].image} width="240" alt='img'/>
      <div>Origin: {details[0].origin}</div>
      <div>Temperaments: {details[0].temperament}</div>
      <div>Weight: {details[0].weight}</div>
      <div>Height: {details[0].height}</div>
      <div>Life Span: {details[0].lifeSpan}</div>
      <div>Breed Group: {details[0].breed_group}</div>
      <div>Bred For: {details[0].bred_for}</div>
    </div>
  )  
}

let mapStateToProps = (state) => {
  return {
      details:state.details
  };
}
  
export default connect(mapStateToProps,{getDogDetails})(Details);