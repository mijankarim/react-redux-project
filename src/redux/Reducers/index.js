import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import singleProductReducer from "./singleProductReducer";

const rootReducer = combineReducers({
    allProducts: productsReducer,
    singleProduct: singleProductReducer
});

export default rootReducer;