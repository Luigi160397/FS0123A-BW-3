import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import homeReducer from "../reducers/homeReducer"
import jobReducer from "../reducers/jobReducer"


const rootReducer = combineReducers({
  profile: profileReducer,
  home: homeReducer,
  job: jobReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
