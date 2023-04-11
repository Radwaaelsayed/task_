import { combineReducers } from "redux";
import { postsReducer } from "./posts/reducer";
import { modelsReducer } from "./model/reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  models: modelsReducer,
});

export default rootReducer;
