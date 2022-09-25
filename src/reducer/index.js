import {ADD_CITY, REMOVE_CITY, GET_CITY, GET_CITY_SUCCESS, GET_CITY_FAILURE} from '../actions';

const initialState = { 
                       data: [],
                       isFetching: false,
                       error: false,
                       errMsg: ''
                     }

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_CITY:
            return {
                ...state,
                isFetching: true
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
                error: true
            }

        case REMOVE_CITY:
            return {
                ...state,
                data: state.filter(oldCities => oldCities.id !== action.id)
            }

        default: return state;
    }
}