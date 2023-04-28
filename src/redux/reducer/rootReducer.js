import cartReducer from "./cartReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";


export default combineReducers({
  cartReducer,
  postReducer
})