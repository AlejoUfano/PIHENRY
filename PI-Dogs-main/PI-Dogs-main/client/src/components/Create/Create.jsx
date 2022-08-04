import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { postDog, getTemperaments, getDogs } from '../../redux/actions/actions.js'
import NavBar from '../NavBar/NavBar.jsx'
import SuccessPopUp from '../SuccessPopUp/SuccessPopUp.jsx'
import { Card } from '../Card/Card.jsx';
import { CreateContainer, TempsContainer, FormContainer, FormTitle, CreateButton, PreviewTitle, Temp, PreviewCardContainer, FormInput, HeightWeight, HeightWeightContainer, ErrorMessage, PreviewContainer } from '../Styles/Create.style.js'
import DropdownMulti from '../DropdownMulti/DropdownMulti.jsx';

let Create = ({ postDog, getTemperaments, temperaments, dogs }) => {
  
  let [errors, setErrors] = useState({})
  let [temps, setTemps] = useState([])
  let [created,setCreated] = useState(false)
  let [dog, setDog] = useState({
                                  name:'',
                                  minHeight:'',
                                  maxHeight:'',
                                  minWeight:'',
                                  maxWeight:'',
                                  age:'',
                                  image:'',
                                  temperaments:''
                                }) 

  useEffect(() => {
    getDogs()
    getTemperaments()
  },[])

  let handleChange = (e) => {
    e.preventDefault()
    setDog({
      ...dog,
      [e.target.name]:e.target.value
    })
    setErrors(formValidation({
      ...dog,
      [e.target.name]: e.target.value
  }))
  }
  
  let handleSubmit = async (e,fileToUpload) => {
    e.preventDefault()
    let finalDog = {
                      name:dog.name,
                      image:dog.image,
                      temperaments:temps,
                      height:`${dog.minHeight} - ${dog.maxHeight}`,
                      weight:`${dog.minWeight} - ${dog.maxWeight}`,
                      age:dog.age
                    }
    console.log('DOG OBJECT SUBMIT:', finalDog);
    postDog(finalDog)
    setCreated(true)
  }

  let formValidation = (dog) => {
    
    let errors = {}

    if(!dog.name){
      errors.name = 'Name cannot be empty'
    } else if(!/^[a-zA-Z\s]*$/.test(dog.name)) {
      errors.name = 'Name can only contain letters'
    } else if(dog.name?.length>30) {
      errors.name = 'Name cannot be more than 30 characters'
    } else if(dogs?.filter(e=>e.name.toLowerCase() ===dog.name?.toLowerCase() ).length) {
      errors.name = 'Already exists a dog with this name'
    }

    if(!dog.minHeight) {
      errors.height = 'Min height cannot be empty'
    } else if(!dog.maxHeight) {
      errors.height = 'Max height cannot be empty'
    } else if(parseInt(dog.minHeight)>parseInt(dog.maxHeight)) {
      errors.height = 'The maximum height must be greater than the minimum'
    }

    if(!dog.minWeight) {
      errors.weight = 'Min weight cannot be empty'
    } else if(!dog.maxWeight) {
      errors.weight = 'Max weight cannot be empty'
    } else if(parseInt(dog.minWeight)>parseInt(dog.maxWeight)) {
      errors.weight = 'The maximum weight must be greater than the minimum'
    } 

    if(!dog.age) {
      errors.age = 'Age cannot be empty'
    }

    if(!dog.image){
      errors.image = 'Image URL cannot be empty'
    }

    return errors
  }
  
  return (
    <>
      <NavBar/>
      <CreateContainer>        
        <FormContainer>
          <FormTitle>Create your dog!</FormTitle>
                <div>
                  <FormInput type='text' placeholder='Name' id='name' name='name' required={true} onChange={(e)=>{handleChange(e)}}/>
                  <ErrorMessage>{errors.name}</ErrorMessage>
                </div>

                <HeightWeightContainer>
                  <HeightWeight type='number' placeholder='Min height' name='minHeight' required={true} min='0' onChange={(e)=>{handleChange(e)}}/>
                  <HeightWeight type='number' placeholder='Max height' name='maxHeight' required={true} min='0' onChange={(e)=>{handleChange(e)}}/>
                </HeightWeightContainer>                
                <ErrorMessage>{errors.height}</ErrorMessage>
                
                <HeightWeightContainer>
                  <HeightWeight type='number' placeholder='Min weight' name='minWeight' required={true} min='0' onChange={(e)=>{handleChange(e)}}/>
                  <HeightWeight type='number' placeholder='Max weight' name='maxWeight' required={true} min='0' onChange={(e)=>{handleChange(e)}}/>
                </HeightWeightContainer>
                <ErrorMessage>{errors.weight}</ErrorMessage>
                
                <div>
                  <FormInput type='number' placeholder='Age' name='age' required={true} min='0' onChange={(e)=>{handleChange(e)}}/>
                  <ErrorMessage>{errors.age}</ErrorMessage>
                </div>

                <div>
                  <FormInput type='text' placeholder='Image URL' name='image' required={true} onChange={(e)=>{handleChange(e)}}/>
                  <ErrorMessage>{errors.image}</ErrorMessage>
                </div>

                <TempsContainer>
                  {temps?.map(e=><><Temp onClick={()=>setTemps(temps.filter(t=>t!==e))}>{temperaments[e-1]} ✖️</Temp></>)}
                </TempsContainer>

                <DropdownMulti setTemps={setTemps} temps={temps} temperaments={temperaments}/>
                <ErrorMessage>{!temps?.length&&errors.image?'You must select at least one temperament':null}</ErrorMessage>                
                
                <div>
                  {
                   <CreateButton type='submit' onClick={(e) => {
                    if(!Object.keys(errors).length && dog.age && temps.length)handleSubmit(e)
                    }}>Create</CreateButton>
                  }            
                
                </div>            
          </FormContainer>
        <PreviewContainer>
        <PreviewTitle>Preview</PreviewTitle>

                  <PreviewCardContainer>
                  <Card dog={{
                                name:dog.name,
                                image:dog.image,
                                temperament:`${temps.map(e=>temperaments[e-1])}`,
                                height:`${dog.minHeight} - ${dog.maxHeight}`,
                                weight:`${dog.minWeight} - ${dog.maxWeight}`,
                                age:dog.age
                            }}/>  
                  </PreviewCardContainer>

        </PreviewContainer>
      </CreateContainer>

      {created?<SuccessPopUp message='Success: Dog created successfully!'/>:null}

    </>
  )
}

let mapStateToProps = (state) => {
  return {
      temperaments: state.temperaments,
      dogs: state.dogs
  };
}
  
export default connect(mapStateToProps,{ postDog, getDogs, getTemperaments })(Create);
