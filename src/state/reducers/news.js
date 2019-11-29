import * as types from '../types';


const newsReducer = (state = [], action={}) =>{
    switch(action.type) {
        case types.SET_NEWS :
            return action.payload; //payload@ popoxakana ev frontic uxarkvac data
        case types.ADD_NEWS :
            return [...state, action.payload];
        default :
            return state;
    }
}



export default newsReducer;


//action  mijocov poxancum em en informacian vor@ petqa @nkni stati mej .