import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import sagas from "../sagas";
import reducers from "../reducers";

const initial = {};

const saga = createSagaMiddleware();
const middleware = [logger, saga];
const store = createStore(reducers, initial, applyMiddleware(...middleware));
console.log(store);


saga.run(sagas);

export default store;
