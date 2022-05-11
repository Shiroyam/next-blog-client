import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./search/reducer";

const rootReducer = combineReducers({
    search: searchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
