import * as types from '../types';


const newsReducer = (state = [], action={}) =>{
    switch(action.type) {
        case types.SET_NEWS :
            return action.payload;
        default :
            return state;
    }
}


export default newsReducer;