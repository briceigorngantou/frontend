import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { cartReducers } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
  getProductByCategoryReducer,
} from "./reducers/productsReducers";

const reducer = combineReducers({
  cart: cartReducers,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  getProductByCategory: getProductByCategoryReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
