import {REMOVE_CITY, GET_CITY, GET_CITY_SUCCESS, GET_CITY_FAILURE, GET_CITY_REPEATED, GET_CITY_NOT_STRING} from '../actions';

const initialState = { 
                       data: [],
                       isFetching: false,
                       error: false,
                       errMsg: 'err',
                       indexRep: false
                     }

export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case GET_CITY:
            return {
                ...state,
                isFetching: true,
                error: false,
                indexRep: false
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

        case GET_CITY_NOT_STRING:
            return {
                ...state,
                isFetching: false,
                error: true,
                errMsg: 'Invalid entry, please try again'
            }

        case GET_CITY_REPEATED:
            return {
                ...state,
                isFetching: false,
                error: true,
                errMsg: 'This city was already searched',
                indexRep: action.indexRep
            }

        case REMOVE_CITY:
            return {
                ...state,
                data: state.data.filter(oldCities => oldCities.id !== action.id)
            }

        default: return state;
    }
}