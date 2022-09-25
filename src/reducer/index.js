import {ADD_CITY, REMOVE_CITY, GET_CITY} from '../actions';

const initialState = [];

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CITY:
            return [
                ...state,
                action.city
            ]

        case GET_CITY:
            return (
                state.filter(cities => cities.id === action.id)
                )

        case REMOVE_CITY:
            return (
                state.filter(oldCities => oldCities.id !== action.id)
                )

        default: return state;
    }
}