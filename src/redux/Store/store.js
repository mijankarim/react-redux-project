import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productsReducer from "../Reducers/productsReducer";

const store = createStore(productsReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;