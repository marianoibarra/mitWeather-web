import {fetchCityAPI} from '../services'

export const GET_CITY = "GET_CITY"
export const GET_CITY_SUCCESS = "GET_CITY_SUCCESS"
export const GET_CITY_FAILURE = "GET_CITY_FAILURE"
export const REMOVE_CITY = "REMOVE_CITY"
export const GET_CITY_REPEATED = "GET_CITY_REPEATED"
export const GET_CITY_NOT_STRING = "GET_CITY_NOT_STRING"

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

export const getCityNotString = () => {
    return {
        type: GET_CITY_NOT_STRING
    }
}

export const getCityRepeated = (indexRep) => {
    return {
        type: GET_CITY_REPEATED,
        indexRep: indexRep
    }
}

export const fetchCity = (payload, id, currentState) => {
    return (dispatch) => {
        dispatch(getCity())
        if(!/^[A-Z\s]+$/i.test(payload)) dispatch(getCityNotString());
        else fetchCityAPI(payload, id)
                .then(city => {
                    let indexRep = currentState.findIndex(currentCity => currentCity.apiId == city.apiId)
                    if(indexRep < 0) {
                        dispatch(getCitySuccess(city))
                    } else {
                        dispatch(getCityRepeated(indexRep))
                    }
                })
                .catch((err) => {dispatch(getCityFailure()); console.log(err)})

    }
}

export const removeCity = (payload) => {
    return {
        type: REMOVE_CITY,
        id: payload 
    }
}