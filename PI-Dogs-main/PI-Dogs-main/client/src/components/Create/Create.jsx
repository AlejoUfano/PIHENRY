import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { postDog, getTemperaments } from '../../redux/actions/actions.js'
import Select from 'react-select'
import NavBar from '../NavBar/NavBar.jsx'
import { CreateContainer, } from '../Styles/Create.style.js'

let Create = ({postDog, getTemperaments,temperaments}) => {
  let [errors, setErrors] = useState({})
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

  let [created,setCreated] = useState(false)

  useEffect(() => {
    getTemperaments()
  },[])

  console.log('TEMPERAMENTS', temperaments);

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
      age:dog.age,
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
  // ============================= SELECT BAR ==============================
  let [temps, setTemps] = useState([])
  let allTemperaments = temperaments.map((e,i)=>{return{value:i+2,label:e}})
  
  // ============================= SELECT BAR ==============================
  
  console.log('TEMPERAMENTS LENGTH', temperaments.length);
  // console.log('DOC.FORM.INPUT',document.getElementById('name').value);
  if(created===true)return(<>DOG CREATED SUCCESSFULLY!!!</>)
  return (
    <CreateContainer>
      <NavBar/>
      <form>
              <div>
                <label for='name'>Name: </label>
                <input type="text" placeholder='Name' id='name' name='name' required={true} onChange={(e)=>{handleChange(e)}} />
                <span>{errors.name}</span>
              </div>
              <div>
                <label for='Height'>Height: </label>
                <input type="number" placeholder='Min height' name='minHeight' required={true} min='0' onChange={(e)=>{handleChange(e)}} />
                <input type="number" placeholder='Max height' name='maxHeight' required={true} min='0' onChange={(e)=>{handleChange(e)}} />
                <span>{errors.height}</span>
              </div>
              <div>
                <label for='Weight'>Weight: </label>
                <input type="number" placeholder='Min weight' name='minWeight' required={true} min='0' onChange={(e)=>{handleChange(e)}} />
                <input type="number" placeholder='Max weight' name='maxWeight' required={true} min='0' onChange={(e)=>{handleChange(e)}} />
                <span>{errors.weight}</span>
              </div>
              <div>
                <label for='age'>Age: </label>
                <input type="number" placeholder='Age' name='age' required={true} min='0' onChange={(e)=>{handleChange(e)}} />
                <span>{errors.age}</span>
              </div>
              <div>
                <label for='image'>Image: </label>
                <input type="text" placeholder='Image URL' name='image' required={true} onChange={(e)=>{handleChange(e)}} />
                <span>{errors.image}</span>
              </div>
              <div>
              <label for='temperaments'>Temperaments: </label>
              <Select isMulti onChange={(e)=>{setTemps(e.map(e=>e.value-1))}} options={allTemperaments}/>
              <span>{!temps.length?'You must select at least one temperament':console.log('TEMPS FROM SELECT SPAN:',temps)}</span>          
              </div>
              <div>
                {
                  !Object.keys(errors).length && dog.age && temps.length
                  ?<button type='submit' onClick={(e)=>{handleSubmit(e)}}>Create</button>
                  :null
                }            
              </div>            
      </form>
    </CreateContainer>
  )
}

let mapStateToProps = (state) => {
  return {
      temperaments:state.temperaments
  };
}
  
export default connect(mapStateToProps,{postDog, getTemperaments})(Create);
