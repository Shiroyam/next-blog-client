import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/reducer";
import menuReducer from "./menu/reducer";
import postReducer from "./post/reducer";

const rootReducer = combineReducers({
  searchReducer,
  menuReducer,
  postReducer,
});

export const storeSetup = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof storeSetup>;
export type AppDispatch = AppStore["dispatch"];
