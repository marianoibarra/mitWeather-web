import {fetchCity} from '../services'

export const ADD_CITY = "ADD_CITY"
export const REMOVE_CITY = "REMOVE_CITY"
export const GET_CITY = "GET_CITY"


export const addCity = (payload, id) => {
    return function(dispatch) {
        return fetchCity(payload, id).then(city => {
                    dispatch({
                        type: ADD_CITY,
                        city: city,
                        id: id
                    })
                })
    }
}

export const getCity = (id) => {
    return {
        type: GET_CITY,
        id
    }
}


export const removeCity = (payload) => {
    return {
        type: REMOVE_CITY,
        id: payload 
    }
}



