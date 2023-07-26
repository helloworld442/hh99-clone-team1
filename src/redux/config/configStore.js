import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "../reducers/userSlice";
import news from "../reducers/newsSlice";
import darkMode from "../reducers/darkModeSlice";
const rootReducer = combineReducers({
  user,
  news,
  darkMode,
});

// 2. create store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

// 3. export
export default store;
