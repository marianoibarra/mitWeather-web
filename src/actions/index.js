import {fetchCityAPI} from '../services'

export const GET_CITY = "GET_CITY"
export const GET_CITY_SUCCESS = "GET_CITY_SUCCESS"
export const GET_CITY_FAILURE = "GET_CITY_FAILURE"
export const REMOVE_CITY = "REMOVE_CITY"

export const getCity = () => {
    return {
        type: GET_CITY
    }
}

export const getCitySuccess = (city) => {
    return {
        city,
        type: GET_CITY_SUCCESS
    }
}

export const getCityFailure = () => {
    return {
        type: GET_CITY_FAILURE
    }
}

export const fetchCity = (payload, id) => {
    return (dispatch) => {
        dispatch(getCity())
        fetchCityAPI(payload, id)
            .then(city => {
                dispatch(getCitySuccess(city))
            })
            .catch((err) => {console.log(err); getCityFailure()})

    }
}

export const removeCity = (payload) => {
    return {
        type: REMOVE_CITY,
        id: payload 
    }
}