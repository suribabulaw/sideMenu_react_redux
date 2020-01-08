import { combineReducers } from "redux";
// import internal(own) modules

import userReducer from "./User/User";

const rootReducer = combineReducers({
   userdata: userReducer
});

export default rootReducer;