import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import homeReducer from "../reducers/homeReducer";
import jobReducer from "../reducers/jobReducer";
import commentReducer from "../reducers/commentReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers({
  profile: profileReducer,
  home: homeReducer,
  job: jobReducer,
  comment: commentReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
