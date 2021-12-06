import { combineReducers } from "redux";
import languageReducer from './reducers/language';
import Reducer from "./reducers/reducer";

export default combineReducers({
    favorite : Reducer,
    language : languageReducer,
})