import { GET_DOGS, GET_DOG_BY_NAME, GET_DOG_DETAILS, GET_TEMPERAMENTS, POST_DOG, RESET_FILTERS, FILTER_DOGS_BY_TEMPS, FILTER_DOGS_BY_BREED } from '../actions/actions.js'

let initialState = {
    dogs: [],
    temperaments: [],
    details: [],
    filteredDogs : [],
}
 
export default function reducer(state = initialState, action) {
    switch(action.type){
      case GET_DOGS: {
        console.log('GET_DOGS REDUCER:', action.payload.length)
        return{
        ...state,
        dogs: action.payload,
        details: [],
        }
      }
      case GET_DOG_BY_NAME: {
        console.log('GET_DOGS_BY_NAME REDUCER:', action.payload)
        return{
        ...state,
        dogs: action.payload
        }
      }
      case GET_DOG_DETAILS: {
        console.log('GET_DOG_DETAILS REDUCER:', action.payload)
        return{
        ...state,
        details: action.payload
        }
      }
      case GET_TEMPERAMENTS: {
        return{
        ...state,
        temperaments: action.payload
        }
      }
      case POST_DOG: {
        console.log('POST_DOG REDUCER PAYLOAD:',action.payload);
        console.log('POST_DOG REDUCER:',state.dogs.concat(action.payload))
        return{
        ...state,
        dogs: state.dogs.concat(action.payload)
        }
      }
      case RESET_FILTERS: {
        return{
        ...state,
        filteredDogs: state.dogs
        }
      }
      case FILTER_DOGS_BY_TEMPS: {
        console.log('FILTER_DOGS_BY_TEMPS REDUCER PAYLOAD:',action.payload);
        console.log('FILTERED DOGS REDUCER', state.dogs.filter(e=>e.temperament?.includes(action.payload)));
        return{
        ...state,
        filteredDogs: action.payload==='All'?state.dogs:state.dogs.filter(e=>e.temperament?.includes(action.payload))
        }
      }
      case FILTER_DOGS_BY_BREED: {
        console.log('FILTER_DOGS_BY_BREED REDUCER PAYLOAD:',action.payload);
        console.log('FILTERED DOGS REDUCER', state.dogs.filter(e=>e.name.toLowerCase().includes(action.payload.toLowerCase())))
        return{
        ...state,
        filteredDogs: state.dogs.filter(e=>e.name.toLowerCase().includes(action.payload.toLowerCase()))
        }
      }
      default: {
        return state
      }
    }
  }