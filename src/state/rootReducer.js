import {
    combineReducers
} from "redux";
import newsReducer from "./reducers/news";

export default combineReducers({
   news: newsReducer
})
