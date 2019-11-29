import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './rootReducer';
    const store = createStore(
      rootReducer,
    composeWithDevTools() // extansion  for chrome and ...
    );


    export default store;