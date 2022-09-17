import { GET_DOGS, GET_DOG_BY_NAME, GET_DOG_DETAILS, GET_TEMPERAMENTS, POST_DOG, RESET_FILTERS, FILTER_DOGS_BY_TEMPS, FILTER_DOGS_BY_BREED, NAME_ASC, NAME_DESC, WEIGHT_ASC, WEIGHT_DESC, SET_SOURCE } from '../actions/actions.js'

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
      case NAME_ASC: {
        console.log('NAME_ASC REDUCER', state.filteredDogs?.length?state.filteredDogs.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0)[0]:state.dogs.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0)[0]);
        return{
        ...state,
        filteredDogs: state.filteredDogs?.length?state.filteredDogs.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0):state.dogs.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0)
        }
      }
      case NAME_DESC: {
        console.log('NAME_DESC REDUCER', state.filteredDogs?.length?state.filteredDogs.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0).reverse()[0]:state.dogs.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0).reverse()[0]);
        return{
        ...state,
        filteredDogs: state.filteredDogs?.length?state.filteredDogs.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0).reverse():state.dogs.sort((a,b)=>a.name>b.name?1:b.name>a.name?-1:0).reverse()
        }
      }
      case WEIGHT_ASC: {
        console.log('WEIGHT_DESC REDUCER', state.filteredDogs?.length?state.filteredDogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0)[0]:state.dogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0)[0]);
        return{
        ...state,
        filteredDogs: state.filteredDogs?.length?state.filteredDogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0):state.dogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0)
        }
      }
      case WEIGHT_DESC: {
        console.log('WEIGHT_DESC REDUCER', state.filteredDogs?.length?state.filteredDogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0).reverse()[0]:state.dogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0).reverse()[0]);
        return{
        ...state,
        filteredDogs: state.filteredDogs?.length?state.filteredDogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0).reverse():state.dogs.sort((a,b)=>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?1:b.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2>a.weight.split(' - ').reduce((t,e)=>t+=parseInt(e),0)/2?-1:0).reverse()
        }
      }
      case SET_SOURCE: {
        console.log('SET_SOURCE REDUCER', action.payload === 'API' 
        ? state.dogs.filter(e=>typeof e.id === 'number')
        : action.payload==='DB'
        ? state.dogs.filter(e=>typeof e.id === 'string')
        : state.dogs);
        return{
        ...state,
          filteredDogs: action.payload === 'API' 
        ? state.dogs.filter(e=>typeof e.id === 'number')
        : action.payload==='DB'
        ? state.dogs.filter(e=>typeof e.id === 'string')
        : state.dogs
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