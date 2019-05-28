import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_REMAINING_PRODUCT,
    FETCH_PRODUCTS_FAILURE,
    LOADING
  } from "../actions/types";
  
  const initialState = {
    text: "",
    loading1: false,
    otherproductkit: [],
    error1: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading1: true,
          error1: null
        };
        case FETCH_REMAINING_PRODUCT:
        return {
          ...state,
          otherproductkit: action.payload,
          loading1: false,
          error1: null
        };
      case LOADING:
        return {
          ...state,
          loading1: true
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          products: [],
          loading1: false,
          error1: action.payload
        };
      default:
        return state;
    }
  }
  