import * as actionTypes from "../constants/productsConstants";
import axios from "axios";
import db from "../../db";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_Products_REQUEST,
    });

    // const { data } = await axios.get("http://localhost:4000/products/");
    const data = db;
    dispatch({
      type: actionTypes.GET_Products_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_Products_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_Products_DETAILS_REQUEST,
    });

    // const { data } = await axios.get(`http://localhost:4000/products/${id}`);
    const data = db.find((value) => value.id === id);
    dispatch({
      type: actionTypes.GET_Products_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_Products_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductByCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_Product_BY_CATEGORY_REQUEST,
    });
    // const { data } = await axios.get(
    //   `http://localhost:4000/products/${category}`
    // );

    const data = db.filter((value) => value.category === category);

    dispatch({
      type: actionTypes.GET_Product_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_Product_BY_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_Products_DETAILS_RESET,
  });
};
