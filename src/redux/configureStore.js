import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { verifyAuth } from "./actions/";
import rootReducer from "./reducers";

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  store.dispatch(verifyAuth());
  return store;
}
