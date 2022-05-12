import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./search/reducer";
import { menuReducer } from "./menu/reducer";
import { postsReducer } from "./post/reducer";

const rootReducer = combineReducers({
  search: searchReducer,
  menu: menuReducer,
  posts: postsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
