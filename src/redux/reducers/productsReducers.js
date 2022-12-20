import * as actionTypes from "../constants/productsConstants";

export const getProductsReducer = (state = { Products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_Products_REQUEST:
      return {
        loading: true,
        Products: [],
      };
    case actionTypes.GET_Products_SUCCESS:
      return {
        loading: false,
        Products: action.payload,
      };
    case actionTypes.GET_Products_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { Product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_Products_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_Products_DETAILS_SUCCESS:
      return {
        loading: false,
        Product: action.payload,
      };
    case actionTypes.GET_Products_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_Products_DETAILS_RESET:
      return {
        Product: {},
      };
    default:
      return state;
  }
};

export const getProductByCategoryReducer = (
  state = { Product: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_Product_BY_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_Product_BY_CATEGORY_SUCCESS:
      return {
        loading: false,
        ProductsByCategory: action.payload,
      };
    case actionTypes.GET_Product_BY_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
// export const addProduct = (state = { Products: [] }, action) => {
//   switch (action.type) {
//     case actionTypes.POST_Product_REQUEST:
//       const itemExist = state.Products.find(
//         (value) => value.id === action.payload.id
//       );
//       if (itemExist) {
//         return state;
//       } else {
//         return {
//           ...state,
//           Products: [...state.Products, action.payload],
//         };
//       }
//     default:
//       return state;
//   }
// };

// export const updateProduct = (state = { Products: [] }, action) => {
//   switch (action.type) {
//     case actionTypes.PUT_Product_REQUEST:
//       const itemExist = state.Products.find(
//         (value) => value === action.payload
//       );

//       if (itemExist) {
//         return {
//           ...state,
//           Products: state.Products.map((value) =>
//             value.id === action.payload.id ? action.payload : value
//           ),
//         };
//       }
//       break;
//     default:
//       return state;
//   }
// };
