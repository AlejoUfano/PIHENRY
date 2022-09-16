import axios from 'axios'

export const GET_DOGS = 'GET_DOGS'
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME'
export const GET_DOG_DETAILS = 'GET_DOG_DETAILS'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const POST_DOG = 'POST_DOG'
export const FILTER_DOGS_BY_TEMPS = 'FILTER_DOGS_BY_TEMPS'
export const FILTER_DOGS_BY_BREED = 'FILTER_DOGS_BY_BREED'
export const RESET_FILTERS = 'RESET_FILTERS'

export const getDogs = () => {
        return async (dispatch) => {
            try {      
                let data = await axios.get('http://localhost:3001/dogs');
                console.log('DATA.DATA INFO:', data.data.length);            
                return dispatch({ type: GET_DOGS, payload: data.data });
            } catch(e) {
                console.error(e);
            }
        }
}
export const filterDogsByBreed = (filter) => {
    return async (dispatch) => {
        try {              
            return dispatch({ type: FILTER_DOGS_BY_BREED, payload: filter});
        } catch(e) {
            console.error(e);
        }
    }
}
export const resetFilters = () => {
    return async (dispatch) => {
        try {              
            return dispatch({ type: RESET_FILTERS });
        } catch(e) {
            console.error(e);
        }
    }
}
export const filterDogsByTemps = (filter) => {
    return async (dispatch) => {
        try {              
            return dispatch({ type: FILTER_DOGS_BY_TEMPS, payload: filter});
        } catch(e) {
            console.error(e);
        }
    }
}

export const getDogByName = (name) => {
    return async (dispatch) => {
        try {
            let data = await axios.get(`http://localhost:3001/dogs/?name=${name}`);
            return dispatch({ type: GET_DOG_BY_NAME, payload: data.data });
        } catch(e) {
            console.error(e);
        }
    }
}


export const getDogDetails = (id) => {
    console.log('LLEGAMOS A ACTION DETAILS');
    return async (dispatch) => {
        try {
            let data = await axios.get(`http://localhost:3001/dogs/${id}`)
            console.log('ACTION GET_DOG_DETAILS:',data.data);
            return dispatch({ type: GET_DOG_DETAILS, payload: data.data })
        } catch(e) {
            console.log(e)
        }
    }
}

export const getTemperaments = () => {
    return async (dispatch) => {
        try {
            let data = await axios.get('http://localhost:3001/temperaments')
            return dispatch({ type:GET_TEMPERAMENTS, payload: data.data })
        } catch(e) {
            console.log(e);
        }

    }
}

export const postDog = (dog) => {
    return async (dispatch) => {
        try {
            let data = await axios.post('http://localhost:3001/dogs/create',dog)
            return dispatch({ type:POST_DOG, payload: data.data })
        } catch(e) {
            console.log(e);
        }
    }
}
