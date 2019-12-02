import {
    combineReducers
} from "redux";
import newsReducer from "./reducers/news";
// import { start } from "repl";

export default combineReducers({
   news: newsReducer
})
  
