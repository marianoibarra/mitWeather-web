import {ADD_CITY, REMOVE_CITY, GET_CITY, GET_CITY_SUCCESS, GET_CITY_FAILURE} from '../actions';

const initialState = { 
                       data: [],
                       isFetching: false,
                       error: false,
                       errMsg: 'err'
                     }

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_CITY:
            return {
                ...state,
                isFetching: true,
                error: false
            }

        case GET_CITY_SUCCESS:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.city
                ],
                isFetching: false
            }

        case GET_CITY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errMsg: 'Wrong city, please try again'
            }

        case REMOVE_CITY:
            return {
                ...state,
                data: state.data.filter(oldCities => oldCities.id !== action.id)
            }

        default: return state;
    }
}