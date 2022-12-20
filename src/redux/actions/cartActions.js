import * as actionTypes from "../constants/cartConstants";
import axios from "axios";
import db from "../../db";

export const addToCart = (id) => async (dispatch, getState) => {
  // const { data } = await axios.get(`http://localhost:4000/Products/${id}`);
  const data = db.find((x) => x.id === id);
  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      urlImage: data.urlImage,
    },
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
