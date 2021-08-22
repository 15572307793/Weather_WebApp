/*
 * @Autor: Jiang
 * @Date: 2021-05-29 16:40:12
 * @LastAutor: you name
 * @LastEditTime: 2021-08-22 16:41:23
 * @FilePath: /Weather_WebApp/src/store.js
 */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import receiveWebsocketReducer from "./pages/weatherPage/store/reducer";

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(applyMiddleware(...middlewares));

const reducers = combineReducers({
  websockets: receiveWebsocketReducer,
});

const initState = {
  websockets: {
    websocketData: {},
  },
};
export default createStore(reducers, initState, storeEnhancers);
