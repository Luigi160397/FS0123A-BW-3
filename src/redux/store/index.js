import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import homeReducer from "../reducers/homeReducer";
import jobReducer from "../reducers/jobReducer";
import commentReducer from "../reducers/commentReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  home: homeReducer,
  job: jobReducer,
  comment: commentReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
