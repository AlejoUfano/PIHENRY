import { GET_DOGS, GET_DOG_BY_NAME, GET_DOG_DETAILS, GET_TEMPERAMENTS, POST_DOG } from '../actions/actions.js'

let initialState = {
    dogs: [],
    temperaments: [],
    details: []
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
      default: {
        return state
      }
    }
  }