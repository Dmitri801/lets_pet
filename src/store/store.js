import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

let composeEnhancers = compose;
const initialState = {};
const middleware = [thunk];

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    composeEnhancers()
  )
);

export default store;
