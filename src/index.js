import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";

import thunkMiddleware from "redux-thunk";

import libraryReducer from "./store/reducers/movie-library-reducer";
import authReducer from "./store/reducers/auth-reducer";

import App from "./store/containers/app-container";

const rootReducer = combineReducers({
  movieLibrary: libraryReducer, 
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
